import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iytak3z-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iytak3z-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:smile-dizzy"} {...others} />);
}

export default Component;
