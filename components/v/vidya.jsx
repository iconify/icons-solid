import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj6rrdcag.css';
import '../../css/z/zzefkb6jx.css';
import '../../css/o/oo4e5ubpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qj6rrdcag"/><path class="zzefkb6jx"/><path class="oo4e5ubpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vidya"} {...others} />);
}

export default Component;
