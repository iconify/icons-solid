import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oh__4bxtl.css';
import '../../css/r/r1xemmb8r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oh__4bxtl"/><path class="r1xemmb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:myheats-dark"} {...others} />);
}

export default Component;
