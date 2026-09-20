import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-74fqbsy.css';
import '../../css/a/au084ob1x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q-74fqbsy"/><path class="au084ob1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:notepad-plus-plus-dark"} {...others} />);
}

export default Component;
