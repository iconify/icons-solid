import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsnh_gbkp.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="fsnh_gbkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:umbrella"} {...others} />);
}

export default Component;
