import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0viuutrh.css';
import '../../css/f/fy-g4rb8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q0viuutrh"/><path class="fy-g4rb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:shield-check-light"} {...others} />);
}

export default Component;
