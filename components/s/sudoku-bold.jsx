import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thbz86bat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="thbz86bat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:sudoku-bold"} {...others} />);
}

export default Component;
