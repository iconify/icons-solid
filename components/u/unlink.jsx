import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_oz0_00z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y_oz0_00z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:unlink"} {...others} />);
}

export default Component;
