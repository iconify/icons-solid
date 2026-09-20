import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu_r7z49s.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="hu_r7z49s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:rotate-left-1-remix"} {...others} />);
}

export default Component;
