import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anm5-5b-v.css';
import '../../css/v/vf3f05_0e.css';
import '../../css/q/qldxu1nsm.css';

const viewBox = {"width":16,"height":16};
const content = `<path transform="matrix(1.26652 0 0 1.26466 -1.313 -1.572)" class="anm5-5b-v"/><circle class="vf3f05_0e"/><path class="qldxu1nsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:rproj"} {...others} />);
}

export default Component;
