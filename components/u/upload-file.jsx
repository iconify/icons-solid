import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmwpenbhg.css';
import '../../css/i/i4bpspa_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer pmwpenbhg"/><path class="duoicon-primary-layer i4bpspa_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:upload-file"} {...others} />);
}

export default Component;
