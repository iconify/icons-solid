import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_2kcdb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_2kcdb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:bug-report-filled"} {...others} />);
}

export default Component;
