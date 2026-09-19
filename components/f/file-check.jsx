import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbj8p3c7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qbj8p3c7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:file-check"} {...others} />);
}

export default Component;
