import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlr_hjb5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zlr_hjb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:presentation-fill"} {...others} />);
}

export default Component;
