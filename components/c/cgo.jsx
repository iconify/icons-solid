import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di6m5ibxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="di6m5ibxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cgo"} {...others} />);
}

export default Component;
