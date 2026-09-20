import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3ro5bbhu.css';
import '../../css/c/ck3x9ggdl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s3ro5bbhu"/><path clip-rule="evenodd" class="ck3x9ggdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:tickets-3"} {...others} />);
}

export default Component;
