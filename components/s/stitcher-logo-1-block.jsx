import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-5195bzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o-5195bzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:stitcher-logo-1-block"} {...others} />);
}

export default Component;
