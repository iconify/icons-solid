import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocb0xlwdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ocb0xlwdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:phone-find-fill"} {...others} />);
}

export default Component;
