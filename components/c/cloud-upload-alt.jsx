import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6soyqb0a.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="x6soyqb0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:cloud-upload-alt"} {...others} />);
}

export default Component;
