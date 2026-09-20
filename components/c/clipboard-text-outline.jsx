import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/goc7o0rte.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="goc7o0rte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-text-outline"} {...others} />);
}

export default Component;
