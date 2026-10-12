import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfhfeibhb.css';
import '../../css/z/zndyzxb5r.css';
import '../../css/m/md49ci-8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zfhfeibhb"/><path class="zndyzxb5r"/><path class="md49ci-8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:car-duotone"} {...others} />);
}

export default Component;
