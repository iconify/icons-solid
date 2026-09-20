import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjmd6lg4e.css';
import '../../css/p/pmxu__b5p.css';
import '../../css/c/c9hx8jb4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rjmd6lg4e"/><path class="pmxu__b5p"/><path class="c9hx8jb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smiley-unhappy"} {...others} />);
}

export default Component;
