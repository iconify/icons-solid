import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0s51ebnl.css';
import '../../css/p/pzvbzhw1c.css';
import '../../css/z/z-_-ey0ea.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z0s51ebnl"/><path class="pzvbzhw1c"/><path class="z-_-ey0ea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:datetime"} {...others} />);
}

export default Component;
