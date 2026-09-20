import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6uu00ymn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x6uu00ymn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:battery-empty-2"} {...others} />);
}

export default Component;
