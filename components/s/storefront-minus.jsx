import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l66csu07v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l66csu07v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:storefront-minus"} {...others} />);
}

export default Component;
