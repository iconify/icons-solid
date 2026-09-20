import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmyuz8c8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dmyuz8c8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:volume-cross-outline"} {...others} />);
}

export default Component;
