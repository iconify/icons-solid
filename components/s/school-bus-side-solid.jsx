import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spdlrf7lr.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="spdlrf7lr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:school-bus-side-solid"} {...others} />);
}

export default Component;
