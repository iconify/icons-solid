import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nii0p1blk.css';
import '../../css/h/h631kg9bu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nii0p1blk"/><circle class="h631kg9bu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:status"} {...others} />);
}

export default Component;
