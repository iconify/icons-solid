import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slu5h6ecs.css';
import '../../css/f/fu5ar-14p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="slu5h6ecs"/><path class="fu5ar-14p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shape-subtract-alt"} {...others} />);
}

export default Component;
