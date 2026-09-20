import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcuwd4bmd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qcuwd4bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:crates-under-roof"} {...others} />);
}

export default Component;
