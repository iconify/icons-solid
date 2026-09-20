import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkrpub5im.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-11};
const content = `<path class="zkrpub5im"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:minus"} {...others} />);
}

export default Component;
