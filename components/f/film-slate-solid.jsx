import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty6ovj9xm.css';
import '../../css/k/kr81jbccc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ty6ovj9xm"/><path clip-rule="evenodd" class="kr81jbccc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:film-slate-solid"} {...others} />);
}

export default Component;
