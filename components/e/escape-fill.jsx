import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nin0wu0rp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nin0wu0rp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:escape-fill"} {...others} />);
}

export default Component;
