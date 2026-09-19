import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3pqhgbsx.css';
import '../../css/o/obc0bdcuj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3pqhgbsx"/><path class="obc0bdcuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wrist-watch"} {...others} />);
}

export default Component;
