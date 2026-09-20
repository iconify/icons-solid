import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/arn-f-bpt.css';
import '../../css/p/pzkyy6i0j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="arn-f-bpt"/><path class="pzkyy6i0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:play-list-8"} {...others} />);
}

export default Component;
