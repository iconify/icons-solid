import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwuzo1b4x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dwuzo1b4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:paragraph-right-to-left"} {...others} />);
}

export default Component;
