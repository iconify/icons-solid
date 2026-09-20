import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o4f4mzg3u.css';
import '../../css/a/acpxsnb4x.css';
import '../../css/z/zo4sq-c-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o4f4mzg3u"/><path class="acpxsnb4x"/><path class="zo4sq-c-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:water-straw"} {...others} />);
}

export default Component;
