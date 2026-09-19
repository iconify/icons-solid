import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbv4wpb-c.css';
import '../../css/c/csr9vodhl.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="zbv4wpb-c"/><circle class="csr9vodhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-point-on-surface"} {...others} />);
}

export default Component;
