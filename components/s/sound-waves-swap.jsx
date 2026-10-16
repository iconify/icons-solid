import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i7gfde8ng.css';
import '../../css/n/n_z65_bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i7gfde8ng"/><path class="n_z65_bwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sound-waves-swap"} {...others} />);
}

export default Component;
