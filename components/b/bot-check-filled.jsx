import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_r9uibzg.css';
import '../../css/c/cdu9hfbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_r9uibzg"/><path clip-rule="evenodd" class="cdu9hfbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bot-check-filled"} {...others} />);
}

export default Component;
