import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn1w2eb5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fn1w2eb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:boxing-glove-solid"} {...others} />);
}

export default Component;
