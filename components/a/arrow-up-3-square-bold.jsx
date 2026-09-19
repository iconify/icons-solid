import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8_fmknql.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h8_fmknql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-up-3-square-bold"} {...others} />);
}

export default Component;
