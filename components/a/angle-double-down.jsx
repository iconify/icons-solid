import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr43w4bsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cr43w4bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:angle-double-down"} {...others} />);
}

export default Component;
