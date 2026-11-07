import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4tpa7b5j.css';
import '../../css/q/qa5889vlx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b4tpa7b5j"/><path class="qa5889vlx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mirror-right-bold"} {...others} />);
}

export default Component;
