import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6gwf2-xb.css';
import '../../css/o/o_t_4_bfo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z6gwf2-xb"/><path class="o_t_4_bfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:large-blue-diamond"} {...others} />);
}

export default Component;
