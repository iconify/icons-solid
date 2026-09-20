import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-nq0ebna.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e-nq0ebna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:dots-horizontal"} {...others} />);
}

export default Component;
