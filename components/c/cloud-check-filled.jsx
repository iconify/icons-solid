import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4flwc34c.css';
import '../../css/a/ateqv7i3o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y4flwc34c"/><path class="ateqv7i3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-check-filled"} {...others} />);
}

export default Component;
