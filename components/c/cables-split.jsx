import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apav0wf3s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="apav0wf3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cables-split"} {...others} />);
}

export default Component;
