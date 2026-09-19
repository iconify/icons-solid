import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulra56alq.css';
import '../../css/w/w03w98eed.css';
import '../../css/v/v5k322mny.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ulra56alq"><path class="w03w98eed"/><path class="v5k322mny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:heroku"} {...others} />);
}

export default Component;
