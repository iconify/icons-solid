import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj0rd9brn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jj0rd9brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:shopping-bag-outline"} {...others} />);
}

export default Component;
