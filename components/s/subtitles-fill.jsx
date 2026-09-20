import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh82h5geo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xh82h5geo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:subtitles-fill"} {...others} />);
}

export default Component;
