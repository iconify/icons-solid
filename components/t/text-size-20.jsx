import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byu4-dbwe.css';
import '../../css/c/cffi7tb7g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="byu4-dbwe"/><path class="cffi7tb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:text-size-20"} {...others} />);
}

export default Component;
