import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svn71h5bl.css';

const viewBox = {"width":464,"height":448};
const content = `<path class="svn71h5bl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:friendster"} {...others} />);
}

export default Component;
