import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enx00nbbf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="enx00nbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:file-copy-fill"} {...others} />);
}

export default Component;
