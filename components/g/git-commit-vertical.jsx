import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/i19_pfblm.css';
import '../../css/u/umwzrabax.css';
import '../../css/w/w-0n4zb8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="i19_pfblm"/><path class="umwzrabax"/><path class="w-0n4zb8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:git-commit-vertical"} {...others} />);
}

export default Component;
