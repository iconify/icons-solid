import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlp7nj4mq.css';
import '../../css/z/z_edm0hny.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wlp7nj4mq"/><path clip-rule="evenodd" class="z_edm0hny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:shield-2-check"} {...others} />);
}

export default Component;
