import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2qg2dbat.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};
const content = `<path class="v2qg2dbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:medium"} {...others} />);
}

export default Component;
