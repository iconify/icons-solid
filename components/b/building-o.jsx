import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayfjvlbde.css';
import '../../css/p/pb95qppxk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ayfjvlbde"/><path class="pb95qppxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:building-o"} {...others} />);
}

export default Component;
