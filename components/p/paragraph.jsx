import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc34h_bxu.css';

const viewBox = {"width":20,"height":24};
const content = `<path class="jc34h_bxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:paragraph"} {...others} />);
}

export default Component;
