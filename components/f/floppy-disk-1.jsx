import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r7dw8pb9h.css';
import '../../css/u/ukxvxxbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r7dw8pb9h"/><path class="ukxvxxbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:floppy-disk-1"} {...others} />);
}

export default Component;
