import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jch-8pb6m.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="jch-8pb6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:coffee-mug"} {...others} />);
}

export default Component;
