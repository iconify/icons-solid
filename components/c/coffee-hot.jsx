import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t-0znnbxc.css';
import '../../css/b/be0htwbow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t-0znnbxc"/><path class="be0htwbow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:coffee-hot"} {...others} />);
}

export default Component;
