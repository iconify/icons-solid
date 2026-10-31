import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4v7tl5oa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m4v7tl5oa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cable-round"} {...others} />);
}

export default Component;
