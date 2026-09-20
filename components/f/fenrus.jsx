import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uslf4acad.css';
import '../../css/i/ia682rbyt.css';
import '../../css/r/r6heypbkr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uslf4acad"/><path class="ia682rbyt"/><path class="r6heypbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fenrus"} {...others} />);
}

export default Component;
