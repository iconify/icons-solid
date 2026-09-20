import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdg5s2amp.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8zu7p64g.css';
import '../../css/w/wkck6fb3i.css';
import '../../css/m/mc2zb0bvp.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGHwRGdWeY" class="rdg5s2amp"/></defs><g class="ft5dv1b6b"><path class="z8zu7p64g"/><use href="#SVGHwRGdWeY"/><path class="wkck6fb3i"/><use href="#SVGHwRGdWeY" class="mc2zb0bvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:file-import-duotone"} {...others} />);
}

export default Component;
