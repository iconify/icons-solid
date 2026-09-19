import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fuc1n9wvy.css';
import '../../css/c/crd3eebtk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fuc1n9wvy"/><path class="crd3eebtk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:star-face"} {...others} />);
}

export default Component;
