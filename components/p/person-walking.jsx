import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bb4kn2bbl.css';
import '../../css/q/q1uhlqbuy.css';
import '../../css/l/ljvvjtnlp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="bb4kn2bbl"/><path class="q1uhlqbuy"/><path class="ljvvjtnlp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-walking"} {...others} />);
}

export default Component;
