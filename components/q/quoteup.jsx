import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frf7sf2bz.css';

const viewBox = {"width":1024,"height":768};
const content = `<path class="frf7sf2bz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:quoteup"} {...others} />);
}

export default Component;
