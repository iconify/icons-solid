import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny6_5-aau.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ny6_5-aau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:accessibility-fill"} {...others} />);
}

export default Component;
