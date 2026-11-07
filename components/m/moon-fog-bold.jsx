import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h21hmgjli.css';
import '../../css/e/esqvhtbwf.css';
import '../../css/q/qqgi4e04c.css';
import '../../css/t/t7fjfmboq.css';
import '../../css/z/zgg5gabcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h21hmgjli"/><path class="esqvhtbwf"/><path class="qqgi4e04c"/><path class="t7fjfmboq"/><path class="zgg5gabcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-fog-bold"} {...others} />);
}

export default Component;
