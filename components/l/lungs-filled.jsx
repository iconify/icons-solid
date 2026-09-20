import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow1w-gj-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ow1w-gj-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lungs-filled"} {...others} />);
}

export default Component;
