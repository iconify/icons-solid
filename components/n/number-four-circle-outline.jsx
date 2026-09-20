import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzi_0qbmf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bzi_0qbmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:number-four-circle-outline"} {...others} />);
}

export default Component;
