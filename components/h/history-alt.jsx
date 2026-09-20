import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oh638qb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oh638qb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:history-alt"} {...others} />);
}

export default Component;
