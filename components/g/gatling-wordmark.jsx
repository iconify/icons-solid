import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5v8cfb5j.css';
import '../../css/g/gd--6wbfj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="f5v8cfb5j"/><path class="gd--6wbfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:gatling-wordmark"} {...others} />);
}

export default Component;
