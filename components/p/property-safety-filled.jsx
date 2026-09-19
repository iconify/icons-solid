import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmi7ps-qu.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="mmi7ps-qu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:property-safety-filled"} {...others} />);
}

export default Component;
