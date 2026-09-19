import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_n5l8bhu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u_n5l8bhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:presentation"} {...others} />);
}

export default Component;
