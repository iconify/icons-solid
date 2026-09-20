import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x24otrb4s.css';
import '../../css/s/s5a3cqb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x24otrb4s"/><path class="s5a3cqb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kex"} {...others} />);
}

export default Component;
