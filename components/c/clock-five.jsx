import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_44q3bqb.css';
import '../../css/c/chv7bcx-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_44q3bqb"/><path class="chv7bcx-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:clock-five"} {...others} />);
}

export default Component;
