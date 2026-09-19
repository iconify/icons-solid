import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggywzw3ne.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ggywzw3ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:connectivity-tenancy"} {...others} />);
}

export default Component;
