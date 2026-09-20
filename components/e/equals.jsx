import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddr3z9ymk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ddr3z9ymk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:equals"} {...others} />);
}

export default Component;
