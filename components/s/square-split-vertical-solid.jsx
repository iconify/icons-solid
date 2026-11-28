import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtx8mq7hg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jtx8mq7hg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-split-vertical-solid"} {...others} />);
}

export default Component;
