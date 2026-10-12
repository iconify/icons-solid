import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2-3vzbzw.css';
import '../../css/y/ycekm8byx.css';
import '../../css/v/vwtbn-brr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s2-3vzbzw"/><path class="ycekm8byx"/><path class="vwtbn-brr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:feather-20"} {...others} />);
}

export default Component;
