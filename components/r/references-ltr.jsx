import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z85_dpqxw.css';
import '../../css/n/nr_jdhnzu.css';
import '../../css/a/axc47sboq.css';
import '../../css/a/amd0_d8mz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z85_dpqxw"/><path class="nr_jdhnzu"/><path class="axc47sboq"/><path class="amd0_d8mz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:references-ltr"} {...others} />);
}

export default Component;
