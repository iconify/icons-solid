import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5ozg169z.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="j5ozg169z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:user-black-filled"} {...others} />);
}

export default Component;
