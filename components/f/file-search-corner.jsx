import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fqlq82b9v.css';
import '../../css/z/z7uojzuaw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fqlq82b9v"/><path class="z7uojzuaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-search-corner"} {...others} />);
}

export default Component;
