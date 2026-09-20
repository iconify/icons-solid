import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvpp2bcjw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bvpp2bcjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:coderwall"} {...others} />);
}

export default Component;
