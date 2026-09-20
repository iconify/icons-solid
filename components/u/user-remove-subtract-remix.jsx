import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_bpyn97l.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="v_bpyn97l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:user-remove-subtract-remix"} {...others} />);
}

export default Component;
