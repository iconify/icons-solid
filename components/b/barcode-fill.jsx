import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxubx6b0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bxubx6b0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:barcode-fill"} {...others} />);
}

export default Component;
