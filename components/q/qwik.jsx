import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s53vmbcgz.css';
import '../../css/j/jick4kgxj.css';
import '../../css/b/bxyjj4o7z.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="s53vmbcgz"><path class="jick4kgxj"/><path class="bxyjj4o7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:qwik"} {...others} />);
}

export default Component;
