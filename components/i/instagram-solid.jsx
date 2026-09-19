import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm6j0-c1z.css';
import '../../css/s/s9jco_ufp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qm6j0-c1z"/><path clip-rule="evenodd" class="s9jco_ufp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:instagram-solid"} {...others} />);
}

export default Component;
