import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrkewab2c.css';
import '../../css/b/b7h45cb1t.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="vrkewab2c"/><path class="b7h45cb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:alternativeto"} {...others} />);
}

export default Component;
