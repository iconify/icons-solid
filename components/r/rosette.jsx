import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czh5ncche.css';
import '../../css/c/chx9uvzml.css';
import '../../css/o/ox5-scb3j.css';
import '../../css/g/gy5pnuxbb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="czh5ncche"/><path class="chx9uvzml"/><circle class="ox5-scb3j"/><circle class="gy5pnuxbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:rosette"} {...others} />);
}

export default Component;
