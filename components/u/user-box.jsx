import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jq6j-7brw.css';
import '../../css/p/pwbt2qflx.css';
import '../../css/j/jgjjp7t-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="jq6j-7brw"/><circle class="pwbt2qflx"/><rect class="jgjjp7t-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-box"} {...others} />);
}

export default Component;
