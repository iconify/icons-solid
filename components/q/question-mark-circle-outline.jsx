import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wckr9kb1z.css';
import '../../css/k/kj34mfmgb.css';
import '../../css/o/oclompb7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wckr9kb1z"/><path class="kj34mfmgb"/><circle class="oclompb7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:question-mark-circle-outline"} {...others} />);
}

export default Component;
