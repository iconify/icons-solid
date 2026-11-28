import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coo41t5hb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="coo41t5hb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:dollar-circle-solid"} {...others} />);
}

export default Component;
