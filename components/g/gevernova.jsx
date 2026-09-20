import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiqfbpcfc.css';

const viewBox = {"width":1545,"height":1544};
const content = `<path class="oiqfbpcfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:gevernova"} {...others} />);
}

export default Component;
