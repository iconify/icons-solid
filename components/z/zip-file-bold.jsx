import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj1cjk89h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jj1cjk89h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:zip-file-bold"} {...others} />);
}

export default Component;
