import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z67tz0b-g.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="z67tz0b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:basket-loaded"} {...others} />);
}

export default Component;
