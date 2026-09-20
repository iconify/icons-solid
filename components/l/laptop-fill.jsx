import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3ceodbcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z3ceodbcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:laptop-fill"} {...others} />);
}

export default Component;
