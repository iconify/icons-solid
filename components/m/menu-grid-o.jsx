import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwtt7-lhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zwtt7-lhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:menu-grid-o"} {...others} />);
}

export default Component;
