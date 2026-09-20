import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxnt2gb4a.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="uxnt2gb4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:desktop-dollar-solid"} {...others} />);
}

export default Component;
