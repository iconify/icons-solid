import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trs_dtk_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="trs_dtk_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:badge-korean-won-solid"} {...others} />);
}

export default Component;
