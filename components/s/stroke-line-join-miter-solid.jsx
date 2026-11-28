import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux7jf8buz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ux7jf8buz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:stroke-line-join-miter-solid"} {...others} />);
}

export default Component;
