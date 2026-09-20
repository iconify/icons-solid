import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq3c38dxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xq3c38dxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:gowalla-logo-3-block"} {...others} />);
}

export default Component;
