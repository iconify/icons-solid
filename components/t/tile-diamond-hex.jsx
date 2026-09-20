import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azoqwpfwf.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="azoqwpfwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:tile-diamond-hex"} {...others} />);
}

export default Component;
