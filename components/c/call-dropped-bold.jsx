import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_hf_9u3p.css';
import '../../css/a/autb8mb3e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m_hf_9u3p"/><path class="autb8mb3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-dropped-bold"} {...others} />);
}

export default Component;
