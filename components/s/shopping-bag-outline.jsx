import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk4yqnh0p.css';
import '../../css/m/m9tv2wbji.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fk4yqnh0p"/><path class="m9tv2wbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:shopping-bag-outline"} {...others} />);
}

export default Component;
