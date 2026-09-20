import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3nqpne1g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g3nqpne1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:noodle-gallery-dark"} {...others} />);
}

export default Component;
