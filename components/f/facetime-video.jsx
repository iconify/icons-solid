import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aysq33bjm.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="aysq33bjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:facetime-video"} {...others} />);
}

export default Component;
