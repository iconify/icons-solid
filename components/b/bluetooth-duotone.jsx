import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufc3b8blb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary ufc3b8blb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bluetooth-duotone"} {...others} />);
}

export default Component;
