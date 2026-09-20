import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9481-llz.css';
import '../../css/k/ko8oeoczp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r9481-llz"/><path class="ko8oeoczp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sonarr-light"} {...others} />);
}

export default Component;
