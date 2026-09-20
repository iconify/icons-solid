import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd4m4tkzl.css';
import '../../css/e/ebd7f4inr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kd4m4tkzl"/><path class="ebd7f4inr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:android-alt"} {...others} />);
}

export default Component;
