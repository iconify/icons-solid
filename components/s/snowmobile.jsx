import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ho7y_mbjl.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ho7y_mbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:snowmobile"} {...others} />);
}

export default Component;
