import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/n/nhw_tkbxm.css';
import '../../css/j/j8-lr2r-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="nhw_tkbxm"/><path class="j8-lr2r-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:briefcase"} {...others} />);
}

export default Component;
