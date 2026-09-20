import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gepc7-94s.css';
import '../../css/u/ud-710byh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gepc7-94s"/><path class="ud-710byh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:microsoft-teams"} {...others} />);
}

export default Component;
