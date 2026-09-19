import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro6hirbas.css';
import '../../css/o/o9_y2yslb.css';
import '../../css/y/y_23wccrq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ro6hirbas"/><path class="o9_y2yslb"/><path class="y_23wccrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:copy-twotone"} {...others} />);
}

export default Component;
