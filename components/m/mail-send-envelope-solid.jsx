import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtipr6b9g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rtipr6b9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:mail-send-envelope-solid"} {...others} />);
}

export default Component;
