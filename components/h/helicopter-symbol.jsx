import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbnu52b5d.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="zbnu52b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:helicopter-symbol"} {...others} />);
}

export default Component;
