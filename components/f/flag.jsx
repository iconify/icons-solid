import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tisqd0b5c.css';
import '../../css/d/d4z24ff_g.css';

const viewBox = {"width":13,"height":16};
const content = `<path class="tisqd0b5c"/><path class="d4z24ff_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:flag"} {...others} />);
}

export default Component;
