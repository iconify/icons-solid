import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8-t6_pqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c8-t6_pqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:curtains-open-solid"} {...others} />);
}

export default Component;
