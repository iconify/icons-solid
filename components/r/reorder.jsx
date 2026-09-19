import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6z-3iz4b.css';
import '../../css/w/wpuyqmbtu.css';
import '../../css/l/ln93sbcwe.css';

const viewBox = {"width":7,"height":16};
const content = `<circle class="m6z-3iz4b"/><circle class="wpuyqmbtu"/><circle class="ln93sbcwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:reorder"} {...others} />);
}

export default Component;
