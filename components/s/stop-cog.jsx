import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/au0ie6bpn.css';
import '../../css/l/l4ovptbip.css';
import '../../css/q/qkmfhjfvj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="au0ie6bpn"/><path class="l4ovptbip"/><path class="qkmfhjfvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:stop-cog"} {...others} />);
}

export default Component;
