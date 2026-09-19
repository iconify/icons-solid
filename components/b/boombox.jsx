import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ah5mw8brc.css';
import '../../css/t/tsy_4oboe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ah5mw8brc"/><path class="tsy_4oboe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:boombox"} {...others} />);
}

export default Component;
