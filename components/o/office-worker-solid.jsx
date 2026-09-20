import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxup_rb4b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qxup_rb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:office-worker-solid"} {...others} />);
}

export default Component;
