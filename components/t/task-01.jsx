import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l5yooqbos.css';
import '../../css/a/adlmmac5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l5yooqbos"/><path class="adlmmac5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:task-01"} {...others} />);
}

export default Component;
