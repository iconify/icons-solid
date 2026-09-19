import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdcvev7wr.css';
import '../../css/f/fbeas_klm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cdcvev7wr duoicon-primary-layer"/><path class="duoicon-secondary-layer fbeas_klm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:certificate"} {...others} />);
}

export default Component;
