import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwb00usql.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mwb00usql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:soda-bottle-solid"} {...others} />);
}

export default Component;
