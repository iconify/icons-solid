import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bntn4zffv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bntn4zffv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:water-drop-alt"} {...others} />);
}

export default Component;
