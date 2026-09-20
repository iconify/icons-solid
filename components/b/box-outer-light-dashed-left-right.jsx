import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p77k6zh-b.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="p77k6zh-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-dashed-left-right"} {...others} />);
}

export default Component;
