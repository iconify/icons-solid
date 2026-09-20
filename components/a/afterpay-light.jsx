import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4t_ri-sq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y4t_ri-sq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:afterpay-light"} {...others} />);
}

export default Component;
