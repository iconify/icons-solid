import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smtdp5bbp.css';
import '../../css/i/i423b8lay.css';
import '../../css/p/plefd-99d.css';

const viewBox = {"width":445,"height":168};
const content = `<path class="smtdp5bbp"/><path class="i423b8lay"/><path class="plefd-99d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:skechers"} {...others} />);
}

export default Component;
