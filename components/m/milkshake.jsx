import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oh-3m18qq.css';

const viewBox = {"width":352,"height":512};
const content = `<path class="oh-3m18qq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:milkshake"} {...others} />);
}

export default Component;
