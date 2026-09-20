import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u57lmtb4w.css';
import '../../css/g/gprn__pii.css';
import '../../css/d/de8upybhb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u57lmtb4w"/><path class="gprn__pii"/><path class="de8upybhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ticky"} {...others} />);
}

export default Component;
