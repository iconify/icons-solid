import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2vx0ib8h.css';
import '../../css/h/hl7909bpw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x2vx0ib8h"/><path class="hl7909bpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:transportation-train"} {...others} />);
}

export default Component;
