import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozmn8obvd.css';
import '../../css/z/zsbatf1yf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ozmn8obvd"/><path class="zsbatf1yf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:image-no-background"} {...others} />);
}

export default Component;
