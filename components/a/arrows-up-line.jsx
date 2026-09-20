import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbn1m_afc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lbn1m_afc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:arrows-up-line"} {...others} />);
}

export default Component;
