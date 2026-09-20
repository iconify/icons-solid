import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxae--4pg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxae--4pg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:marina-bay-sand-line"} {...others} />);
}

export default Component;
