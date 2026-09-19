import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zsn489tse.css';
import '../../css/m/myuiq3bdf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zsn489tse"/><path class="myuiq3bdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:wrench"} {...others} />);
}

export default Component;
