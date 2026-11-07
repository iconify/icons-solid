import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8nox1bbt.css';
import '../../css/o/ouxb72b3s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z8nox1bbt"/><path class="ouxb72b3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crown-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
