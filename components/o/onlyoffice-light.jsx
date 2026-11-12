import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1-d8oozv.css';
import '../../css/m/mas9rozrn.css';
import '../../css/i/i49k2acdw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j1-d8oozv"/><path class="mas9rozrn"/><path class="i49k2acdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:onlyoffice-light"} {...others} />);
}

export default Component;
