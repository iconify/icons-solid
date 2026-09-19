import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b81cd0uud.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="b81cd0uud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:place-of-worship"} {...others} />);
}

export default Component;
