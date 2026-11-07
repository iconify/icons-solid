import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l33hdlfbw.css';
import '../../css/x/x_lq2pb5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l33hdlfbw"/><path class="x_lq2pb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mirror-2-bold"} {...others} />);
}

export default Component;
