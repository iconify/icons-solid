import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loibq93je.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="loibq93je"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:twinly-candies-hearts"} {...others} />);
}

export default Component;
