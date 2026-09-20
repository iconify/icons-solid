import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si--z-kmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="si--z-kmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:line-arrow-right-1-remix"} {...others} />);
}

export default Component;
