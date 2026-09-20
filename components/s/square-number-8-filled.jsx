import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f69z4_btz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f69z4_btz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-number-8-filled"} {...others} />);
}

export default Component;
