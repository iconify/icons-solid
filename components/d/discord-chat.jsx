import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1j0aebsi.css';
import '../../css/s/sq9kvubup.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k1j0aebsi"/><path class="sq9kvubup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:discord-chat"} {...others} />);
}

export default Component;
