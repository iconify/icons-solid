import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebt6dfb6z.css';
import '../../css/m/mpz6u0b-o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ebt6dfb6z"/><path class="mpz6u0b-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:radio-filled"} {...others} />);
}

export default Component;
