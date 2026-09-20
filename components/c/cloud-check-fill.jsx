import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q96z7vg-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q96z7vg-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cloud-check-fill"} {...others} />);
}

export default Component;
