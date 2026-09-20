import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pdynspj-w.css';
import '../../css/d/dstvg4b7n.css';
import '../../css/a/ar0_svbsd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="pdynspj-w"/><path class="dstvg4b7n"/><path class="ar0_svbsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ai-generate-landscape-image-spark"} {...others} />);
}

export default Component;
