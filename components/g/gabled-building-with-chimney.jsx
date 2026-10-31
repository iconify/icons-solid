import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgwh5lbax.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bgwh5lbax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:gabled-building-with-chimney"} {...others} />);
}

export default Component;
