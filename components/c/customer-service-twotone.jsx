import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phr3r27xz.css';
import '../../css/z/z9r3_1dmr.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="phr3r27xz"/><path class="z9r3_1dmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:customer-service-twotone"} {...others} />);
}

export default Component;
