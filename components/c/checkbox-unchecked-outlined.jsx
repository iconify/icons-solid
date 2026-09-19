import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu_6k2w7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xu_6k2w7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:checkbox-unchecked-outlined"} {...others} />);
}

export default Component;
