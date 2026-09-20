import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_6i1t2sr.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="p_6i1t2sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:magnifying-glass"} {...others} />);
}

export default Component;
