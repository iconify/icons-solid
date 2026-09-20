import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/je-_wxchd.css';
import '../../css/s/s8vwhvbxd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="je-_wxchd"/><path class="s8vwhvbxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-places-snorkle-diving-scuba-outdoor-recreation-ocean-mask-water-sea-snorkle"} {...others} />);
}

export default Component;
