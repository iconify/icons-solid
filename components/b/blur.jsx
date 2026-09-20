import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fiugobc0l.css';
import '../../css/b/bc69m5bpz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fiugobc0l"/><path class="bc69m5bpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:blur"} {...others} />);
}

export default Component;
