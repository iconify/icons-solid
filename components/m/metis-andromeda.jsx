import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr1jnvb_y.css';
import '../../css/u/umd4-qbsh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nr1jnvb_y"/><path class="umd4-qbsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:metis-andromeda"} {...others} />);
}

export default Component;
