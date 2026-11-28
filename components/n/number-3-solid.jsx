import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nqu3ykbth.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nqu3ykbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:number-3-solid"} {...others} />);
}

export default Component;
