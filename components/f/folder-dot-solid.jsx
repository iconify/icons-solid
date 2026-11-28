import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzu0pmlpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hzu0pmlpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-dot-solid"} {...others} />);
}

export default Component;
