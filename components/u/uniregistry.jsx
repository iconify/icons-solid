import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq-j5olxh.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="vq-j5olxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:uniregistry"} {...others} />);
}

export default Component;
