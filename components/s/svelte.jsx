import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onm3z34ob.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="onm3z34ob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:svelte"} {...others} />);
}

export default Component;
