import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9r9llbfe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x9r9llbfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:remove-subtract-sign-bold"} {...others} />);
}

export default Component;
