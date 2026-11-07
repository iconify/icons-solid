import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvyfd2cnm.css';
import '../../css/v/vs5n4kb4o.css';
import '../../css/p/ppziiibjw.css';
import '../../css/t/txahl3bke.css';
import '../../css/d/dspe7mbcd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lvyfd2cnm"/><path class="vs5n4kb4o"/><path class="ppziiibjw"/><path class="txahl3bke"/><path class="dspe7mbcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-3-bold"} {...others} />);
}

export default Component;
