import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbk-ufbag.css';
import '../../css/s/syww2wg1x.css';
import '../../css/h/h3qo2x5ah.css';
import '../../css/t/t5hz4nbbz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rbk-ufbag"/><path class="syww2wg1x"/><path class="h3qo2x5ah"/><path class="t5hz4nbbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:supercapacitor-20"} {...others} />);
}

export default Component;
