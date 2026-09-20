import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg-1y-bay.css';
import '../../css/x/xszw9heki.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jg-1y-bay"/><path class="xszw9heki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-copy-filled"} {...others} />);
}

export default Component;
