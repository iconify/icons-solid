import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv7os6knc.css';
import '../../css/x/x8o3q-boh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lv7os6knc"/><path class="x8o3q-boh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:triangle"} {...others} />);
}

export default Component;
