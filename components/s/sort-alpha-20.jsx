import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxmhc0blm.css';
import '../../css/e/eirizwgnj.css';
import '../../css/q/qck7pccit.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uxmhc0blm"/><path class="eirizwgnj"/><path class="qck7pccit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sort-alpha-20"} {...others} />);
}

export default Component;
