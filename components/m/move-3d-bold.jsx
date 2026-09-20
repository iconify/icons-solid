import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqkdk3e9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nqkdk3e9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-3d-bold"} {...others} />);
}

export default Component;
