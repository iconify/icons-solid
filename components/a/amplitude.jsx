import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btxwembdd.css';
import '../../css/x/xx9h8gkna.css';

const viewBox = {"width":5000,"height":1000};
const content = `<path class="btxwembdd"/><path class="xx9h8gkna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:amplitude"} {...others} />);
}

export default Component;
