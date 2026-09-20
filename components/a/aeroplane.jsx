import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud7e4l8zk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ud7e4l8zk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:aeroplane"} {...others} />);
}

export default Component;
