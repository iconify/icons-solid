import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozoj0vbaf.css';
import '../../css/k/khkqlacip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ozoj0vbaf"/><path class="khkqlacip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:swimming-filled"} {...others} />);
}

export default Component;
