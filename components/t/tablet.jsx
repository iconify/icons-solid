import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lrbheqbcl.css';
import '../../css/m/m__3g0wki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lrbheqbcl"/><path class="m__3g0wki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:tablet"} {...others} />);
}

export default Component;
