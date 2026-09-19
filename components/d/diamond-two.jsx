import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyd4gcyqt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wyd4gcyqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:diamond-two"} {...others} />);
}

export default Component;
