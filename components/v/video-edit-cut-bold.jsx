import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq_pzdluz.css';
import '../../css/s/sp9gcvbbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wq_pzdluz"/><path class="sp9gcvbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:video-edit-cut-bold"} {...others} />);
}

export default Component;
