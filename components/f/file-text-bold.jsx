import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1g98hbyj.css';
import '../../css/r/rhj7tk-5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r1g98hbyj"/><path class="rhj7tk-5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-text-bold"} {...others} />);
}

export default Component;
