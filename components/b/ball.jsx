import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngtu_95cw.css';
import '../../css/f/fqk5odb6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ngtu_95cw"/><path class="fqk5odb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:ball"} {...others} />);
}

export default Component;
