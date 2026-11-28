import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2bbonbsv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z2bbonbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sidebar-collapse-solid"} {...others} />);
}

export default Component;
