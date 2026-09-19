import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jor-usn7v.css';
import '../../css/x/x1q6z__kk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jor-usn7v"/><path class="x1q6z__kk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:area"} {...others} />);
}

export default Component;
