import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-sd27hth.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="x-sd27hth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:angle-dobule-left"} {...others} />);
}

export default Component;
