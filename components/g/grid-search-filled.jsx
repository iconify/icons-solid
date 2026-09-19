import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4dpz7bpj.css';
import '../../css/n/nk8mvcwfe.css';
import '../../css/o/otisgkbwr.css';
import '../../css/x/x4muw1bdl.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="v4dpz7bpj"/><rect class="nk8mvcwfe"/><rect class="otisgkbwr"/><path class="x4muw1bdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:grid-search-filled"} {...others} />);
}

export default Component;
