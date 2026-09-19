import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dwqbf5jyq.css';
import '../../css/y/yn6l3fqyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dwqbf5jyq"/><path class="yn6l3fqyv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:finger-print"} {...others} />);
}

export default Component;
