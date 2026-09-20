import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idh2j0bic.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="idh2j0bic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cloud-x-fill"} {...others} />);
}

export default Component;
