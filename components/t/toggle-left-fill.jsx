import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh5og7tnq.css';
import '../../css/f/f__7awrdy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bh5og7tnq"/><path class="f__7awrdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:toggle-left-fill"} {...others} />);
}

export default Component;
