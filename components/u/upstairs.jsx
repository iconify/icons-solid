import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t96ugl3qb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t96ugl3qb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:upstairs"} {...others} />);
}

export default Component;
