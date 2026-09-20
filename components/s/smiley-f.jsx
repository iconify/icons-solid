import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt6k4ej1w.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1.5};
const content = `<path class="zt6k4ej1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:smiley-f"} {...others} />);
}

export default Component;
