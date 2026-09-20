import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swoo4rbsl.css';
import '../../css/u/ukyr80b4m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="swoo4rbsl"/><path class="ukyr80b4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:cassette-tape-solid"} {...others} />);
}

export default Component;
