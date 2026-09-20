import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsomw9b0p.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="fsomw9b0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:recycle-bin-2-remix"} {...others} />);
}

export default Component;
