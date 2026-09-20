import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9ait8b3g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y9ait8b3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-arrow-down-left-sharp-fill"} {...others} />);
}

export default Component;
