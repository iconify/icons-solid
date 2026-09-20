import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3yu25n4q.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="c3yu25n4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:eject-remix"} {...others} />);
}

export default Component;
