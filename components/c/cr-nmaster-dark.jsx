import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j36ek5mfl.css';
import '../../css/w/wyq4150dw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j36ek5mfl"/><path class="wyq4150dw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cr-nmaster-dark"} {...others} />);
}

export default Component;
