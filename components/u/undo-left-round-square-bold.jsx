import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx9oaobmf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lx9oaobmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:undo-left-round-square-bold"} {...others} />);
}

export default Component;
