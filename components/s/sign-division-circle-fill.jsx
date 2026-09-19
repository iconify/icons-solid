import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pew7ey2cm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pew7ey2cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-division-circle-fill"} {...others} />);
}

export default Component;
