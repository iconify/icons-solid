import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5i1vx9wz.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="e5i1vx9wz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:shopping-bag-filled"} {...others} />);
}

export default Component;
