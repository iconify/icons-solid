import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbh3tpq0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rbh3tpq0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:connected-circle"} {...others} />);
}

export default Component;
