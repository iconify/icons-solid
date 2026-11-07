import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8d4-cc9w.css';
import '../../css/p/p8mr26bfo.css';
import '../../css/g/g4j5pwbyn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h8d4-cc9w"/><path clip-rule="evenodd" class="p8mr26bfo"/><path class="g4j5pwbyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:laptop-bold-duotone"} {...others} />);
}

export default Component;
