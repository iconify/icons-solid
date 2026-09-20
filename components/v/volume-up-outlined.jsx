import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hoswc34or.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hoswc34or"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:volume-up-outlined"} {...others} />);
}

export default Component;
