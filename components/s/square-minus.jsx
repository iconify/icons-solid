import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef7owseox.css';
import '../../css/z/zan_i8btj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ef7owseox"/><path class="zan_i8btj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:square-minus"} {...others} />);
}

export default Component;
