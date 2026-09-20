import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9hzgob4v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i9hzgob4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:angle-right-solid"} {...others} />);
}

export default Component;
