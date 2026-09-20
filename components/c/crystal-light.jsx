import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7qd0xhrq.css';

const viewBox = {"width":200,"height":200};
const content = `<path class="k7qd0xhrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:crystal-light"} {...others} />);
}

export default Component;
