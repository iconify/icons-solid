import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9f9vwbpw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i9f9vwbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:shredder-remix"} {...others} />);
}

export default Component;
