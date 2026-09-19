import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/avstzqbmj.css';
import '../../css/j/jh2awfzci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="avstzqbmj"/><path class="jh2awfzci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:input-short-text"} {...others} />);
}

export default Component;
