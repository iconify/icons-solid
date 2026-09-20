import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m20rxt8mc.css';
import '../../css/p/pkcnx6ceq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m20rxt8mc"/><path class="pkcnx6ceq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-open-book"} {...others} />);
}

export default Component;
