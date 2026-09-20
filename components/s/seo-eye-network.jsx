import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjmq40opm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jjmq40opm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:seo-eye-network"} {...others} />);
}

export default Component;
