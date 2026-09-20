import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdk-94blo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xdk-94blo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-pinterest-filled"} {...others} />);
}

export default Component;
