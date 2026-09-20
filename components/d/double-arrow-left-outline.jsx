import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knz6qdp8j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="knz6qdp8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:double-arrow-left-outline"} {...others} />);
}

export default Component;
