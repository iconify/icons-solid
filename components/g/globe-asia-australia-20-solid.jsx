import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwk2m_bop.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="lwk2m_bop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:globe-asia-australia-20-solid"} {...others} />);
}

export default Component;
