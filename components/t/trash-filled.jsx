import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwh7i9_ct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nwh7i9_ct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:trash-filled"} {...others} />);
}

export default Component;
