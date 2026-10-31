import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arg0qg52u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="arg0qg52u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-chevron-left-fill-round"} {...others} />);
}

export default Component;
