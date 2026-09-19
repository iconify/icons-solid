import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi05xubmo.css';
import '../../css/a/a2uu82b7g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yi05xubmo"/><path clip-rule="evenodd" class="a2uu82b7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:undo-outline"} {...others} />);
}

export default Component;
