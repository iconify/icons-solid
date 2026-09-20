import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktz_dipcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ktz_dipcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:setting-filled"} {...others} />);
}

export default Component;
