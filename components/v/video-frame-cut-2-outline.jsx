import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py1534b9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="py1534b9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-cut-2-outline"} {...others} />);
}

export default Component;
