import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc-7fybyz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wc-7fybyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:atlassian"} {...others} />);
}

export default Component;
