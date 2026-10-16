import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0d7-ntjn.css';

const viewBox = {"width":366.08,"height":298.83,"left":-3.29,"top":29.96};
const content = `<path class="z0d7-ntjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:in-toto-dark"} {...others} />);
}

export default Component;
