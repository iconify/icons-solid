import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a46888bgx.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="a46888bgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:screenshot"} {...others} />);
}

export default Component;
