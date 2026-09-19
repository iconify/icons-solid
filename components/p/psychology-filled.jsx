import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/te1hwkbud.css';
import '../../css/b/bkh5a45lp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="te1hwkbud"/><path class="bkh5a45lp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:psychology-filled"} {...others} />);
}

export default Component;
