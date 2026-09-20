import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cg1ldfepb.css';
import '../../css/t/tyftk6bnd.css';
import '../../css/j/jdrs_-bia.css';
import '../../css/e/etvk4jbiq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="cg1ldfepb"/><path class="tyftk6bnd"/><path class="jdrs_-bia"/><path class="etvk4jbiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:user-sync-online-in-person"} {...others} />);
}

export default Component;
