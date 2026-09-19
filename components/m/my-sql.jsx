import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xr-on4bcb.css';
import '../../css/u/ubjsthbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xr-on4bcb"/><path class="ubjsthbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:my-sql"} {...others} />);
}

export default Component;
