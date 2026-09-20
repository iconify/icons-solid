import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jdqqmmn0f.css';
import '../../css/b/bk5i81qzz.css';
import '../../css/k/kzrcizbwo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="jdqqmmn0f"/><circle class="bk5i81qzz"/><path class="kzrcizbwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-setting-pie-chart-cog-setting-graph-cog"} {...others} />);
}

export default Component;
