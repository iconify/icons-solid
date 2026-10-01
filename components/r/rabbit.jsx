import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvt0s3njn.css';
import '../../css/v/vmr_zhb1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jvt0s3njn"/><path class="vmr_zhb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rabbit"} {...others} />);
}

export default Component;
