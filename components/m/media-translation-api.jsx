import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-b0m2bdx.css';
import '../../css/m/m7ak63tdr.css';
import '../../css/h/hjqeyxbix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-b0m2bdx"/><path class="m7ak63tdr"/><path class="hjqeyxbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:media-translation-api"} {...others} />);
}

export default Component;
