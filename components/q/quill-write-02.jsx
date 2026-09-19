import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fgf3lmnhv.css';
import '../../css/s/se9gb8bkp.css';
import '../../css/z/zagwpqb9a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fgf3lmnhv"/><path class="se9gb8bkp"/><path class="zagwpqb9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:quill-write-02"} {...others} />);
}

export default Component;
