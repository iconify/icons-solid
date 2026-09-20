import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9qs0v4_t.css';
import '../../css/k/kphbbgbvu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p9qs0v4_t"/><path class="kphbbgbvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xprt"} {...others} />);
}

export default Component;
