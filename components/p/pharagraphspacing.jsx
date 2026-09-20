import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3-vpb73p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k3-vpb73p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pharagraphspacing"} {...others} />);
}

export default Component;
