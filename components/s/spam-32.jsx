import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sib2qlbqm.css';
import '../../css/o/o2vbwlbha.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sib2qlbqm"/><path clip-rule="evenodd" class="o2vbwlbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:spam-32"} {...others} />);
}

export default Component;
