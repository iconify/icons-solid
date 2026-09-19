import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4xv3tn6n.css';

const viewBox = {"width":895,"height":1024};
const content = `<path class="e4xv3tn6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:papercutter"} {...others} />);
}

export default Component;
