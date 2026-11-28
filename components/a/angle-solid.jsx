import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afu_zwhke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="afu_zwhke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:angle-solid"} {...others} />);
}

export default Component;
