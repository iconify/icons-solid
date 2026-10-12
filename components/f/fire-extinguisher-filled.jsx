import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayq_smivk.css';
import '../../css/h/ht6zbmbwp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ayq_smivk"/><path clip-rule="evenodd" class="ht6zbmbwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:fire-extinguisher-filled"} {...others} />);
}

export default Component;
