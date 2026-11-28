import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ot0f_k9ab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ot0f_k9ab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:crown-star"} {...others} />);
}

export default Component;
