import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vik2i1kjg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vik2i1kjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:keyboard-asterisk-2"} {...others} />);
}

export default Component;
