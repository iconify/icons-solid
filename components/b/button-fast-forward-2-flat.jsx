import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii0t0frbs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ii0t0frbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:button-fast-forward-2-flat"} {...others} />);
}

export default Component;
