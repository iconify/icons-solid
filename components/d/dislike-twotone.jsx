import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8iftzbxv.css';
import '../../css/z/zm26i8bpa.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="s8iftzbxv"/><path class="zm26i8bpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:dislike-twotone"} {...others} />);
}

export default Component;
