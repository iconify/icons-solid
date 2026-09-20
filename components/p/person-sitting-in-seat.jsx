import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw4e8vbqk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cw4e8vbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-sitting-in-seat"} {...others} />);
}

export default Component;
