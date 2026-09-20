import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxanvt8uk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lxanvt8uk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plane-3-bold"} {...others} />);
}

export default Component;
