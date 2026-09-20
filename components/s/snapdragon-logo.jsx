import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fzkgfv_8s.css';
import '../../css/h/hdj5huhzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="fzkgfv_8s"/><path class="hdj5huhzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:snapdragon-logo"} {...others} />);
}

export default Component;
