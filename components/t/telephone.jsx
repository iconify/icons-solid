import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2t_mpb7s.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="z2t_mpb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:telephone"} {...others} />);
}

export default Component;
