import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtkl9p4jv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vtkl9p4jv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:file-download-fill"} {...others} />);
}

export default Component;
