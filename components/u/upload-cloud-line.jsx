import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyt5i2b6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jyt5i2b6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:upload-cloud-line"} {...others} />);
}

export default Component;
