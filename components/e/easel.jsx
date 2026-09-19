import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ns5x1qb3u.css';
import '../../css/c/c-o8u9blp.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="ns5x1qb3u"/><path class="c-o8u9blp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:easel"} {...others} />);
}

export default Component;
