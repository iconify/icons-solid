import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tiw3j3-js.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tiw3j3-js"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:id-card-lock"} {...others} />);
}

export default Component;
