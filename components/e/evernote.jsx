import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exv5f0b-b.css';

const viewBox = {"width":400,"height":488};
const content = `<path class="exv5f0b-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:evernote"} {...others} />);
}

export default Component;
