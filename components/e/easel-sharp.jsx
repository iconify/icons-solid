import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyy3z6b2h.css';
import '../../css/b/b0bieq5rt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jyy3z6b2h"/><path class="b0bieq5rt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:easel-sharp"} {...others} />);
}

export default Component;
