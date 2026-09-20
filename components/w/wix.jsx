import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xakvbx2pb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xakvbx2pb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:wix"} {...others} />);
}

export default Component;
