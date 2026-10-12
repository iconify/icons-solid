import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pehpq5qtd.css';
import '../../css/b/ba28ldwhx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pehpq5qtd"/><path class="ba28ldwhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-minus-filled"} {...others} />);
}

export default Component;
