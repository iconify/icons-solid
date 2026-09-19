import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmmcidcze.css';
import '../../css/t/tba5rlbwf.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="qmmcidcze"/><path class="tba5rlbwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-evernote"} {...others} />);
}

export default Component;
