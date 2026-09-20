import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idssa5b9o.css';
import '../../css/r/rb33ccc5m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="idssa5b9o"/><path class="rb33ccc5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:square-minus-light"} {...others} />);
}

export default Component;
