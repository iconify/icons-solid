import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-alqbkvq.css';
import '../../css/p/pt0gcvbpi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o-alqbkvq"/><path class="pt0gcvbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:human-resources-search-men"} {...others} />);
}

export default Component;
