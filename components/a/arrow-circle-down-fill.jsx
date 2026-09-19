import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv059fbgd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xv059fbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:arrow-circle-down-fill"} {...others} />);
}

export default Component;
