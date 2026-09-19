import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4h-jy6jc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c4h-jy6jc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:fthtml"} {...others} />);
}

export default Component;
