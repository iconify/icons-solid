import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gi53r86ip.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gi53r86ip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:constitute-outline"} {...others} />);
}

export default Component;
