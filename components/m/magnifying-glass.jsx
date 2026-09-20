import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzdy0xb7i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dzdy0xb7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:magnifying-glass"} {...others} />);
}

export default Component;
