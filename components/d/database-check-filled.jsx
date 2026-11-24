import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9mz7kbwo.css';
import '../../css/e/e_r9uibzg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l9mz7kbwo"/><path class="e_r9uibzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:database-check-filled"} {...others} />);
}

export default Component;
