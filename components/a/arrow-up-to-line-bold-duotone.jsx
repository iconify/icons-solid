import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn92h86ac.css';
import '../../css/v/v8a66ebgj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wn92h86ac"/><path class="v8a66ebgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-up-to-line-bold-duotone"} {...others} />);
}

export default Component;
