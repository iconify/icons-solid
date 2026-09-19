import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/ho-up6bse.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="ho-up6bse"/><polyline points="8.25 13.25 14.25 13.25 14.25 4.75 8.25 4.75 6.75 2.75 1.75 2.75 1.75 6.75"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:folder-symlink"} {...others} />);
}

export default Component;
