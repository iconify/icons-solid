import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbvv7mb1x.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="mbvv7mb1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:brush"} {...others} />);
}

export default Component;
