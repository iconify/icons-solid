import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgfxe3bsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cgfxe3bsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-align-offset-top-sharp-fill"} {...others} />);
}

export default Component;
