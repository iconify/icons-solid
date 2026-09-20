import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8uw2mboa.css';
import '../../css/p/psr8s7bwr.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="b8uw2mboa"/><path class="psr8s7bwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:super-productivity"} {...others} />);
}

export default Component;
