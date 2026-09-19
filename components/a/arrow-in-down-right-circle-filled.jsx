import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifoopobcj.css';
import '../../css/c/c5qcubb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ifoopobcj"/><path class="c5qcubb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-down-right-circle-filled"} {...others} />);
}

export default Component;
