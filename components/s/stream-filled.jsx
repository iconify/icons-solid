import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4018hsjd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e4018hsjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:stream-filled"} {...others} />);
}

export default Component;
