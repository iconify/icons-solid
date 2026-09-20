import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osr9dmjjc.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};
const content = `<path class="osr9dmjjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:tumblr"} {...others} />);
}

export default Component;
