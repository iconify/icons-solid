import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-kqqwy_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-kqqwy_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:saudi-riyal"} {...others} />);
}

export default Component;
