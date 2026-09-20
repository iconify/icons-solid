import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzzo6jbar.css';
import '../../css/f/fnt2v3b6z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yzzo6jbar"/><path class="fnt2v3b6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:facebook-messenger"} {...others} />);
}

export default Component;
