import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3jv8dbwt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s3jv8dbwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:oval-broadleaved-tree-beside-oval-broadleaved-tree-on-ground"} {...others} />);
}

export default Component;
