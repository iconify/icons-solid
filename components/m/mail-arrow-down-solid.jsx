import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7zu00pcs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z7zu00pcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mail-arrow-down-solid"} {...others} />);
}

export default Component;
