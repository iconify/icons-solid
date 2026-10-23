import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1z3ht6mo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v1z3ht6mo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:menu-right"} {...others} />);
}

export default Component;
