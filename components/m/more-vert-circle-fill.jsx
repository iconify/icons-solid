import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcl0_1bgh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mcl0_1bgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:more-vert-circle-fill"} {...others} />);
}

export default Component;
