import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/ph1b-jzdl.css';
import '../../css/p/pkwgh1b4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ph1b-jzdl"/><path class="pkwgh1b4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cash-search"} {...others} />);
}

export default Component;
