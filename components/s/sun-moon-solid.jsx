import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwk_e0oiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwk_e0oiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sun-moon-solid"} {...others} />);
}

export default Component;
