import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdqo3k3dm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bdqo3k3dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:piano-grand-filled"} {...others} />);
}

export default Component;
