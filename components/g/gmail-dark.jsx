import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebd7wrd7q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ebd7wrd7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gmail-dark"} {...others} />);
}

export default Component;
