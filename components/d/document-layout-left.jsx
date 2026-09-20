import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f29ecibga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f29ecibga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:document-layout-left"} {...others} />);
}

export default Component;
