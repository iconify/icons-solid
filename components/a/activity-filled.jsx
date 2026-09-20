import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j00ef2i9a.css';
import '../../css/v/vje10cmgc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j00ef2i9a"/><path class="vje10cmgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:activity-filled"} {...others} />);
}

export default Component;
