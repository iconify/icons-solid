import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfkx1ubzo.css';
import '../../css/w/wq8x2ubgv.css';
import '../../css/w/wge49ob4x.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="cfkx1ubzo"/><circle class="wq8x2ubgv"/><path class="wge49ob4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:speaker-fill"} {...others} />);
}

export default Component;
