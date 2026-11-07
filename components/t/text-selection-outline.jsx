import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6bxffbta.css';
import '../../css/l/lh-_3in4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m6bxffbta"/><path clip-rule="evenodd" class="lh-_3in4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-selection-outline"} {...others} />);
}

export default Component;
