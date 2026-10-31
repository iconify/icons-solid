import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq89u5v2u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fq89u5v2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:playing-cards-fill-round"} {...others} />);
}

export default Component;
