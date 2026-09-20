import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mond_acof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mond_acof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:star-half"} {...others} />);
}

export default Component;
