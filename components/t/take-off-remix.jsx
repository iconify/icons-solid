import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/euz3adbnh.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="euz3adbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:take-off-remix"} {...others} />);
}

export default Component;
