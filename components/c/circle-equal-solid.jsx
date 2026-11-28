import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj71y7bao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yj71y7bao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:circle-equal-solid"} {...others} />);
}

export default Component;
