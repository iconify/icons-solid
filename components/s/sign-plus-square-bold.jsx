import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oei9pubwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oei9pubwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-plus-square-bold"} {...others} />);
}

export default Component;
