import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbwpdobam.css';
import '../../css/d/dww-yjbde.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sbwpdobam"/><path class="dww-yjbde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:credit-card-visa-bold"} {...others} />);
}

export default Component;
