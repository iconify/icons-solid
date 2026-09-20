import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t52p9_bnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t52p9_bnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:basket-alt-light"} {...others} />);
}

export default Component;
