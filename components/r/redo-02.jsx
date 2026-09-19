import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wpwn3u12l.css';
import '../../css/o/og-2dg1xu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wpwn3u12l"/><path class="og-2dg1xu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:redo-02"} {...others} />);
}

export default Component;
