import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlu9gyjbu.css';
import '../../css/t/t54ht8bfl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vlu9gyjbu"/><path class="t54ht8bfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:single-select-outline"} {...others} />);
}

export default Component;
