import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6i6wnaac.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g6i6wnaac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:iheartradio"} {...others} />);
}

export default Component;
