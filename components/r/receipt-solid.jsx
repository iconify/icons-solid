import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ce4r_lgpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ce4r_lgpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:receipt-solid"} {...others} />);
}

export default Component;
