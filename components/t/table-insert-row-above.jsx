import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6wuffb9g.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="x6wuffb9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:table-insert-row-above"} {...others} />);
}

export default Component;
