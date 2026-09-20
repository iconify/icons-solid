import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywmnq8s9i.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ywmnq8s9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:home-3-remix"} {...others} />);
}

export default Component;
