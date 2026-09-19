import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/butvbl16t.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="butvbl16t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:square-filled"} {...others} />);
}

export default Component;
