import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l46o-ebdw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="l46o-ebdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:importcontacts"} {...others} />);
}

export default Component;
