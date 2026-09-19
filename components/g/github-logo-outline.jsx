import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6o5rl8bt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="github-logo-outline"><path class="(Stroke) Vector c6o5rl8bt" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:github-logo-outline"} {...others} />);
}

export default Component;
