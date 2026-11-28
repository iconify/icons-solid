import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqm2czb7s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qqm2czb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pin-diagonal-solid"} {...others} />);
}

export default Component;
