import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz7ph1gyr.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="mz7ph1gyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:highlighter-1"} {...others} />);
}

export default Component;
