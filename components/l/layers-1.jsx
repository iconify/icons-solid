import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4-v4imeh.css';
import '../../css/m/maj_0caaz.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="c4-v4imeh"/><path class="maj_0caaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:layers-1"} {...others} />);
}

export default Component;
