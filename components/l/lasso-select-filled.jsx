import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zoqiw4b5c.css';
import '../../css/l/lg9rrm_lz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zoqiw4b5c"/><path class="lg9rrm_lz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:lasso-select-filled"} {...others} />);
}

export default Component;
