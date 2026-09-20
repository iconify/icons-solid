import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibn--6bup.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ibn--6bup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-2x3-sharp-fill"} {...others} />);
}

export default Component;
