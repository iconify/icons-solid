import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edkqqia1x.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="edkqqia1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:squaregithub"} {...others} />);
}

export default Component;
