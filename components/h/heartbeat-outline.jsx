import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1bf0p4rg.css';
import '../../css/g/gf6bg710v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1bf0p4rg"/><path class="gf6bg710v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:heartbeat-outline"} {...others} />);
}

export default Component;
