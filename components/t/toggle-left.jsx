import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eki8pkf3u.css';
import '../../css/s/s3ocqmhzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eki8pkf3u"/><path class="s3ocqmhzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:toggle-left"} {...others} />);
}

export default Component;
