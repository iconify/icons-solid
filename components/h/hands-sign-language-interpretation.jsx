import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyv-v7btb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kyv-v7btb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:hands-sign-language-interpretation"} {...others} />);
}

export default Component;
