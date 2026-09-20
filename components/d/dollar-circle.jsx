import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3aun037f.css';
import '../../css/m/mt-ippa9w.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="e3aun037f"/><path clip-rule="evenodd" class="mt-ippa9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:dollar-circle"} {...others} />);
}

export default Component;
