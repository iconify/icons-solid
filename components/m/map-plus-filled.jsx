import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qb2gh7q5f.css';
import '../../css/g/gadlesbca.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qb2gh7q5f"/><path clip-rule="evenodd" class="gadlesbca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:map-plus-filled"} {...others} />);
}

export default Component;
