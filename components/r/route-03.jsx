import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z-tmnrxzi.css';
import '../../css/i/ie85wyr6c.css';
import '../../css/n/nllz_8b7x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="z-tmnrxzi"/><path class="ie85wyr6c"/><path class="nllz_8b7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:route-03"} {...others} />);
}

export default Component;
