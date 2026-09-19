import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s8lupqbuz.css';
import '../../css/s/sx2dysfpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s8lupqbuz"/><path class="sx2dysfpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cursor-magic-selection-01"} {...others} />);
}

export default Component;
