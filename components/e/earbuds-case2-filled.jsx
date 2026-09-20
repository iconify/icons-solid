import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x27ye4o8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x27ye4o8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds-case2-filled"} {...others} />);
}

export default Component;
