import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2kaq6blj.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="s2kaq6blj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:upload-box-1-solid"} {...others} />);
}

export default Component;
