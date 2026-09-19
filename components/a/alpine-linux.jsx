import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojbpt1xwx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ojbpt1xwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:alpine-linux"} {...others} />);
}

export default Component;
