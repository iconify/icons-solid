import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxzv7ug8a.css';
import '../../css/g/gam-p8bqe.css';
import '../../css/e/ece3hyfmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qxzv7ug8a"/><path class="gam-p8bqe"/><path class="ece3hyfmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cbeth"} {...others} />);
}

export default Component;
