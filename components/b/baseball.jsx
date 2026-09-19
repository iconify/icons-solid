import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a588ydb6o.css';
import '../../css/a/axujlccoc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a588ydb6o"/><path class="axujlccoc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:baseball"} {...others} />);
}

export default Component;
