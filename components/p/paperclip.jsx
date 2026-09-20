import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_dpj_7ql.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_dpj_7ql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:paperclip"} {...others} />);
}

export default Component;
