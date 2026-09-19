import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trfw2zy9j.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="trfw2zy9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sonogram2x-outline"} {...others} />);
}

export default Component;
