import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxqbwqxaq.css';
import '../../css/a/a-5p04cix.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cxqbwqxaq"/><path class="a-5p04cix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:mic-sharp"} {...others} />);
}

export default Component;
