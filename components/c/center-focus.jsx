import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8tpj4nsi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t8tpj4nsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:center-focus"} {...others} />);
}

export default Component;
