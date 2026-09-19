import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ih0qqogqa.css';
import '../../css/d/d3p0atbag.css';
import '../../css/r/r-77_6bxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ih0qqogqa"/><rect class="d3p0atbag"/><path class="r-77_6bxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:microphone-minus-solid"} {...others} />);
}

export default Component;
