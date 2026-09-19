import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4n5v94id.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d4n5v94id"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chevron-left-solid"} {...others} />);
}

export default Component;
