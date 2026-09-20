import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b70-wwoww.css';
import '../../css/v/vgzbicbpw.css';
import '../../css/i/ilgbhxbln.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b70-wwoww"/><path class="vgzbicbpw"/><path class="ilgbhxbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-defender-light"} {...others} />);
}

export default Component;
