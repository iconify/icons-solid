import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/i9j-kiphy.css';
import '../../css/d/d3f9n9b2a.css';
import '../../css/c/c5mqpjb8q.css';
import '../../css/b/b84xa49gy.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="i9j-kiphy"/><path class="d3f9n9b2a"/><path class="c5mqpjb8q"/><path class="b84xa49gy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:lint-staged"} {...others} />);
}

export default Component;
