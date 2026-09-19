import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5q9z5bbs.css';
import '../../css/v/vvasjdjcn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o5q9z5bbs"/><path class="vvasjdjcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:color"} {...others} />);
}

export default Component;
