import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi6nv12pd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vi6nv12pd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:step-forward"} {...others} />);
}

export default Component;
