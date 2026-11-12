import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymi_3kb1k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ymi_3kb1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloudpi-light"} {...others} />);
}

export default Component;
