import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynd4v0btj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ynd4v0btj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:chess-pawn"} {...others} />);
}

export default Component;
