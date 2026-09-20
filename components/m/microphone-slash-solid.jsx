import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju4m_kbvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ju4m_kbvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:microphone-slash-solid"} {...others} />);
}

export default Component;
