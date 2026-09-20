import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq9te817o.css';
import '../../css/h/h96e8ebuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dq9te817o"/><path class="h96e8ebuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:information-desk-customer-bold"} {...others} />);
}

export default Component;
