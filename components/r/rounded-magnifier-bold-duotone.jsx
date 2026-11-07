import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9y477w0i.css';
import '../../css/o/ov-0mlbnw.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="n9y477w0i"/><path class="ov-0mlbnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifier-bold-duotone"} {...others} />);
}

export default Component;
