import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuj7w-b9v.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="iuj7w-b9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:profile"} {...others} />);
}

export default Component;
