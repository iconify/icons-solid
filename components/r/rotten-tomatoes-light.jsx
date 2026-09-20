import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu3u76b1x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fu3u76b1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rotten-tomatoes-light"} {...others} />);
}

export default Component;
