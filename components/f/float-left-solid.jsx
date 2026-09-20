import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0n9b51wa.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="o0n9b51wa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:float-left-solid"} {...others} />);
}

export default Component;
