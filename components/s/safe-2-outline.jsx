import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct3j1ul3s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ct3j1ul3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:safe-2-outline"} {...others} />);
}

export default Component;
