import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe9ard3ii.css';
import '../../css/o/o2ezd7b3i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xe9ard3ii"/><path class="o2ezd7b3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:sign-in-alt"} {...others} />);
}

export default Component;
