import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qg8ti8thn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qg8ti8thn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:arrow-left-thick"} {...others} />);
}

export default Component;
