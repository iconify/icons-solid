import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3_2z0moj.css';

const viewBox = {"width":23,"height":24};
const content = `<path class="j3_2z0moj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:angle-dobule-up"} {...others} />);
}

export default Component;
