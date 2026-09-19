import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejyw6md3s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ejyw6md3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:caret-right-outline"} {...others} />);
}

export default Component;
