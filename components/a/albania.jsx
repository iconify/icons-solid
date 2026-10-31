import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ex9s0kk5d.css';
import '../../css/a/a_7jv01nq.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ex9s0kk5d"/><path class="a_7jv01nq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:albania"} {...others} />);
}

export default Component;
