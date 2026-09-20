import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgnm-t93j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kgnm-t93j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bandage-off"} {...others} />);
}

export default Component;
