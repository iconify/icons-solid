import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psb2m6b5c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="psb2m6b5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:speaker-1-remix"} {...others} />);
}

export default Component;
