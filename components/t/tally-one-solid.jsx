import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmekq-6-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fmekq-6-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:tally-one-solid"} {...others} />);
}

export default Component;
