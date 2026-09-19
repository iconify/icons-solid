import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojke0rlcu.css';
import '../../css/o/ocbn0jbob.css';
import '../../css/v/vggz4i0-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer ojke0rlcu"/><path class="duoicon-secondary-layer ocbn0jbob"/><path class="duoicon-primary-layer vggz4i0-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:sun"} {...others} />);
}

export default Component;
