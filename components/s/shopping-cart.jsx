import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eonu4gdjh.css';
import '../../css/h/h0x4ycc5d.css';
import '../../css/u/uf8pr7bxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="eonu4gdjh"/><circle class="h0x4ycc5d"/><path class="uf8pr7bxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:shopping-cart"} {...others} />);
}

export default Component;
