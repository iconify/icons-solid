import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp4ro4bdw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xp4ro4bdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:oval-broadleaved-tree"} {...others} />);
}

export default Component;
