import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yenqbtb5g.css';
import '../../css/e/e_r9uibzg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yenqbtb5g"/><path class="e_r9uibzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-round-check-filled"} {...others} />);
}

export default Component;
