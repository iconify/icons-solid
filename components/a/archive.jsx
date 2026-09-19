import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyib19brx.css';
import '../../css/z/z477j3bdr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eyib19brx"/><rect class="z477j3bdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:archive"} {...others} />);
}

export default Component;
