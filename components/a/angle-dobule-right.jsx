import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyow3oocf.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="kyow3oocf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:angle-dobule-right"} {...others} />);
}

export default Component;
