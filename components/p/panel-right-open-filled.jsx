import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucnu-4ubw.css';
import '../../css/n/ndqjaugsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ucnu-4ubw"/><path class="ndqjaugsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:panel-right-open-filled"} {...others} />);
}

export default Component;
