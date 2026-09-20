import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkh4p1ded.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kkh4p1ded"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:chevron-left-box-outline"} {...others} />);
}

export default Component;
