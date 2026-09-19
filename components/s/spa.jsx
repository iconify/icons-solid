import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f41sj1dgi.css';
import '../../css/o/o9f842q3i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f41sj1dgi"/><path class="o9f842q3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:spa"} {...others} />);
}

export default Component;
