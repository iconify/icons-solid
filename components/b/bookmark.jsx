import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7ld8jb4p.css';

const viewBox = {"width":13,"height":24};
const content = `<path class="l7ld8jb4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:bookmark"} {...others} />);
}

export default Component;
