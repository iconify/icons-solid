import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6pex7q3c.css';
import '../../css/r/rgqpz_b2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o6pex7q3c"/><path class="rgqpz_b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nom"} {...others} />);
}

export default Component;
