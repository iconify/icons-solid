import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnf2tkbyn.css';
import '../../css/w/wu0j47nvj.css';
import '../../css/x/x2cdf-bez.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bnf2tkbyn"/><path class="wu0j47nvj"/><path class="x2cdf-bez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:bandage"} {...others} />);
}

export default Component;
