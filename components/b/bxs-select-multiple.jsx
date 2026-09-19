import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-_99-bnr.css';
import '../../css/l/l_u7c-bkz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c-_99-bnr"/><path class="l_u7c-bkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-select-multiple"} {...others} />);
}

export default Component;
