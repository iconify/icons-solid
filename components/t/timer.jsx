import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbrtl5bbj.css';
import '../../css/q/qvl5apb0s.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="bbrtl5bbj"/><path class="qvl5apb0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:timer"} {...others} />);
}

export default Component;
