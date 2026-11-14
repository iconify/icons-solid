import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m0w8b5b1u.css';
import '../../css/h/h5zj8ybah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m0w8b5b1u"/><path class="h5zj8ybah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:balloon"} {...others} />);
}

export default Component;
