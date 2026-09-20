import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gk33_2w-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gk33_2w-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:flip-horizontal-fill"} {...others} />);
}

export default Component;
