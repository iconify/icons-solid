import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_080nbsv.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="m_080nbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:volume-up"} {...others} />);
}

export default Component;
