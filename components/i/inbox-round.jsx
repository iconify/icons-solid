import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj2qkhw1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lj2qkhw1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:inbox-round"} {...others} />);
}

export default Component;
