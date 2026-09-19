import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci71hn2_l.css';
import '../../css/a/ae5r06sbd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ci71hn2_l"/><path class="ae5r06sbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:ai"} {...others} />);
}

export default Component;
