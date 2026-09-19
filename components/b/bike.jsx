import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ye-mnojip.css';
import '../../css/i/i69vb9b6y.css';
import '../../css/i/i8ac7e7vw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ye-mnojip"/><circle class="i69vb9b6y"/><path class="i8ac7e7vw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:bike"} {...others} />);
}

export default Component;
