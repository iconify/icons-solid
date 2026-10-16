import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ara_cab0k.css';
import '../../css/o/o6es3ib2q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ara_cab0k"/><path class="o6es3ib2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:image-off-48-bold"} {...others} />);
}

export default Component;
