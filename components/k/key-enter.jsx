import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ywff18kar.css';
import '../../css/f/frs8jabkg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ywff18kar"/><path class="frs8jabkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:key-enter"} {...others} />);
}

export default Component;
