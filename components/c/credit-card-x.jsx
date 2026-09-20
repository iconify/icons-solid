import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbuw-_bre.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pbuw-_bre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:credit-card-x"} {...others} />);
}

export default Component;
