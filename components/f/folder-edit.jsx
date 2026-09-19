import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_s6lc4vx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_s6lc4vx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:folder-edit"} {...others} />);
}

export default Component;
