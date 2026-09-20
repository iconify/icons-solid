import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvu0--6-s.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="bvu0--6-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:recycle-1-flat"} {...others} />);
}

export default Component;
