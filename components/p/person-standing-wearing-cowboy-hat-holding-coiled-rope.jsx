import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok1z80fpp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ok1z80fpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-standing-wearing-cowboy-hat-holding-coiled-rope"} {...others} />);
}

export default Component;
