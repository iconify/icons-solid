import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z71hle9dx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="z71hle9dx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-type-cursor-cursor-text-formatting-type-format"} {...others} />);
}

export default Component;
