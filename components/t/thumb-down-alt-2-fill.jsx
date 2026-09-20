import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1n2fmc-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1n2fmc-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:thumb-down-alt-2-fill"} {...others} />);
}

export default Component;
