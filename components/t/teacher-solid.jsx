import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofpz03o2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ofpz03o2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:teacher-solid"} {...others} />);
}

export default Component;
