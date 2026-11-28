import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqt_2kuii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mqt_2kuii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bagel-solid"} {...others} />);
}

export default Component;
