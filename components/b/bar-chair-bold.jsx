import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7bi75b8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d7bi75b8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bar-chair-bold"} {...others} />);
}

export default Component;
