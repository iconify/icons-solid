import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sp19n8hlf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sp19n8hlf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:voice-scan-1-solid"} {...others} />);
}

export default Component;
