import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/d/dr9w-e.css';
import '../../css/g/gdztes.css';
import '../../css/q/q9r29g.css';
import '../../css/d/dq9vho.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c dr9w-e"/><path class="a0m25c gdztes"/><path class="a0m25c q9r29g"/><path class="a0m25c dq9vho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:menu-unfold-left"} {...others} />);
}

export default Component;
