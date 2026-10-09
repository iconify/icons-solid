import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo9_91b2k.css';
import '../../css/a/a79tt-b_j.css';
import '../../css/q/q2lkf7xso.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uo9_91b2k"/><path class="a79tt-b_j"/><path class="q2lkf7xso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stargazing-20-bold"} {...others} />);
}

export default Component;
