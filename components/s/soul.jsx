import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5syj6ckj.css';
import '../../css/t/t5lhdhbbj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c5syj6ckj"/><path class="t5lhdhbbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:soul"} {...others} />);
}

export default Component;
