import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hxju7t5db.css';
import '../../css/b/bil0cqbwg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="hxju7t5db"/><circle class="bil0cqbwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:camera"} {...others} />);
}

export default Component;
