import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft_s7-blo.css';
import '../../css/l/l-9yspb3a.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ft_s7-blo"/><path class="l-9yspb3a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:up-right-arrow"} {...others} />);
}

export default Component;
