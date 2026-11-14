import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8dx7ab2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v8dx7ab2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:credit-card"} {...others} />);
}

export default Component;
