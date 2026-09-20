import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oe47tqu_v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="oe47tqu_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cartoon-cannon-with-lit-fuse"} {...others} />);
}

export default Component;
