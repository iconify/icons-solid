import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/joucdub-z.css';
import '../../css/h/hwp54b9_z.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="joucdub-z"/><path class="hwp54b9_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:audio-muted"} {...others} />);
}

export default Component;
