import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-qn9i21d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-qn9i21d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bolt-filled"} {...others} />);
}

export default Component;
