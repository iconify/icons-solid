import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nep-_ogbn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nep-_ogbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:subway-alt"} {...others} />);
}

export default Component;
