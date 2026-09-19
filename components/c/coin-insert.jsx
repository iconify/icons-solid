import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpmydebry.css';
import '../../css/k/kgk78cbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hpmydebry"/><path class="kgk78cbiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:coin-insert"} {...others} />);
}

export default Component;
