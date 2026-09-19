import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jszndebfn.css';
import '../../css/c/ce63_pesd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jszndebfn"/><path class="ce63_pesd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:floppy-disk-arrow-in"} {...others} />);
}

export default Component;
