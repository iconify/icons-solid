import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-2-wibfu.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="l-2-wibfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:person-circle-minus"} {...others} />);
}

export default Component;
