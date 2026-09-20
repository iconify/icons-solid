import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw-zbzb4r.css';
import '../../css/x/xc1w02vnd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gw-zbzb4r"/><path class="xc1w02vnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-ruler"} {...others} />);
}

export default Component;
