import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk_t5kymf.css';
import '../../css/m/m1idjh0xo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fk_t5kymf"/><path class="m1idjh0xo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:logo-instagram"} {...others} />);
}

export default Component;
