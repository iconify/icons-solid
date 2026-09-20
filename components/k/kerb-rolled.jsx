import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgjx29b-o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zgjx29b-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:kerb-rolled"} {...others} />);
}

export default Component;
