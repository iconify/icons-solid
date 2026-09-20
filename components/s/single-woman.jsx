import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/icnj0w2vc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="icnj0w2vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-woman"} {...others} />);
}

export default Component;
