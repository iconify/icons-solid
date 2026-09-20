import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hh7x7d29g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hh7x7d29g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kwsx-radio-light"} {...others} />);
}

export default Component;
