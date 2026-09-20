import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz8c3l5-w.css';
import '../../css/i/in5h3dbcv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iz8c3l5-w"/><path class="in5h3dbcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-times-duotone"} {...others} />);
}

export default Component;
