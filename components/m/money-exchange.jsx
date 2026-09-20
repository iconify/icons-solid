import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1pyb518k.css';
import '../../css/b/bavhjmbgw.css';
import '../../css/k/kruzn2_tt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b1pyb518k"/><path class="bavhjmbgw"/><path class="kruzn2_tt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:money-exchange"} {...others} />);
}

export default Component;
