import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik5-7ezyb.css';
import '../../css/r/rvju-3bng.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ik5-7ezyb"/><path class="rvju-3bng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:file-json"} {...others} />);
}

export default Component;
