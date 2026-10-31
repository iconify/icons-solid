import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyfm_1-bm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iyfm_1-bm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:letter-n"} {...others} />);
}

export default Component;
