import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8-9l3bmt.css';
import '../../css/o/odnwqioen.css';
import '../../css/p/pugw0bc5m.css';
import '../../css/q/q6zzqeswq.css';
import '../../css/u/u8ulsoosf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y8-9l3bmt"/><path class="odnwqioen"/><path class="pugw0bc5m"/><path class="q6zzqeswq"/><path class="u8ulsoosf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:romance-love-letter-open"} {...others} />);
}

export default Component;
