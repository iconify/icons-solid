import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0tu5dsyz.css';
import '../../css/i/if95wl24z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t0tu5dsyz"/><path class="if95wl24z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:microphone-slash-filled"} {...others} />);
}

export default Component;
