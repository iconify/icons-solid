import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8bf7_9ae.css';
import '../../css/w/wmc2ozbxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8bf7_9ae"/><path class="wmc2ozbxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:home-fill"} {...others} />);
}

export default Component;
