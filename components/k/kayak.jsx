import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu5-jvo0f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zu5-jvo0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:kayak"} {...others} />);
}

export default Component;
