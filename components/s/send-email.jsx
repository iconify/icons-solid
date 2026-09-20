import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e91abccpm.css';
import '../../css/b/bacg9dj7f.css';
import '../../css/x/x792okb-v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e91abccpm"/><path class="bacg9dj7f"/><path class="x792okb-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:send-email"} {...others} />);
}

export default Component;
