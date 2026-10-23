import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7r6s5lmi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z7r6s5lmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-exclamation-point"} {...others} />);
}

export default Component;
