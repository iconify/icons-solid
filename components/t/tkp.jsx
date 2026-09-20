import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu37puwpe.css';
import '../../css/n/nsv122b2e.css';
import '../../css/z/zcrtkru6i.css';
import '../../css/d/dtt48bbaj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nu37puwpe"/><path class="nsv122b2e"/><path class="zcrtkru6i"/><path class="dtt48bbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:tkp"} {...others} />);
}

export default Component;
