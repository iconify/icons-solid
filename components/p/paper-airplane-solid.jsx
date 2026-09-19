import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw1_4lbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tw1_4lbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:paper-airplane-solid"} {...others} />);
}

export default Component;
