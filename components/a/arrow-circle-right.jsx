import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bm2z4abdk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bm2z4abdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:arrow-circle-right"} {...others} />);
}

export default Component;
