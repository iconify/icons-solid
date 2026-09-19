import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dwf3mjbwo.css';
import '../../css/h/h4saa0b0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dwf3mjbwo"/><path class="h4saa0b0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-piggy-bank"} {...others} />);
}

export default Component;
