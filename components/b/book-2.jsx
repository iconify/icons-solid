import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxl51xg6q.css';
import '../../css/e/eruok2ino.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer yxl51xg6q"/><path class="duoicon-primary-layer eruok2ino"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:book-2"} {...others} />);
}

export default Component;
