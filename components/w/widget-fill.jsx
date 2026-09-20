import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qz7z45dsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qz7z45dsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:widget-fill"} {...others} />);
}

export default Component;
