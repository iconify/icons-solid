import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eln8b-54w.css';

const viewBox = {"width":13,"height":24};
const content = `<path class="eln8b-54w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:bookmark-alt"} {...others} />);
}

export default Component;
