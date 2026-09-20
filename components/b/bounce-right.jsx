import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl6__vdrt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xl6__vdrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bounce-right"} {...others} />);
}

export default Component;
