import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g81s1jb6y.css';
import '../../css/t/t0v9d0zwi.css';
import '../../css/d/d45sk0bcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g81s1jb6y"/><path class="t0v9d0zwi"/><path class="d45sk0bcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:vectors-add-anchor"} {...others} />);
}

export default Component;
