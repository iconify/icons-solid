import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsrgl4t2l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gsrgl4t2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:flip-vertical-square-1-remix"} {...others} />);
}

export default Component;
