import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn6a0_m-p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wn6a0_m-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:forth"} {...others} />);
}

export default Component;
