import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amcb6ybaq.css';
import '../../css/k/kasw7ebxt.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="amcb6ybaq"/><path class="kasw7ebxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:womens-health"} {...others} />);
}

export default Component;
