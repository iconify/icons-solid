import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnilq3uxo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qnilq3uxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:info-circle-light"} {...others} />);
}

export default Component;
