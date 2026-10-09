import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjifzhf9x.css';
import '../../css/n/n3w40giun.css';
import '../../css/u/uem-t2b1i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xjifzhf9x"/><path class="n3w40giun"/><path class="uem-t2b1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paint-bucket-48-bold"} {...others} />);
}

export default Component;
