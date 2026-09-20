import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nim_7djxm.css';
import '../../css/e/eo3ia5b9f.css';
import '../../css/o/o6c6qfb-a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nim_7djxm"/><path class="eo3ia5b9f"/><path class="o6c6qfb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:registry-console-dark"} {...others} />);
}

export default Component;
