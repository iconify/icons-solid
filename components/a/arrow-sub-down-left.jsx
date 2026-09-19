import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrc_9q2ij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hrc_9q2ij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:arrow-sub-down-left"} {...others} />);
}

export default Component;
