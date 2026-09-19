import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h96pf7_tx.css';
import '../../css/z/zfoilpbse.css';
import '../../css/u/uzcrctb7x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h96pf7_tx"/><path class="zfoilpbse"/><path class="uzcrctb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:chrome-solid"} {...others} />);
}

export default Component;
