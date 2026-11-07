import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6iijhcww.css';
import '../../css/x/xq74wrb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g6iijhcww"/><path class="xq74wrb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:repeat-bold-duotone"} {...others} />);
}

export default Component;
