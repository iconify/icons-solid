import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgl6b1yyn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bgl6b1yyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:open-folder"} {...others} />);
}

export default Component;
