import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9cm2bbyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q9cm2bbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:grid-3x3-solid"} {...others} />);
}

export default Component;
