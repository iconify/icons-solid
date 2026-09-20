import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpmgbdhgc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vpmgbdhgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:rate-review"} {...others} />);
}

export default Component;
