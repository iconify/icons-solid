import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gonmgov-i.css';
import '../../css/s/s1ew34b9a.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="gonmgov-i"/><path class="s1ew34b9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:camera"} {...others} />);
}

export default Component;
