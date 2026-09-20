import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mi0s3acun.css';
import '../../css/w/w_ul5gqcd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mi0s3acun"/><path class="w_ul5gqcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:castle-filled"} {...others} />);
}

export default Component;
