import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix7je5b7b.css';
import '../../css/p/pxd2iubby.css';
import '../../css/z/z2rgvhb3s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ix7je5b7b wm-deco"/><path class="pxd2iubby"/><path class="z2rgvhb3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mountain"} {...others} />);
}

export default Component;
