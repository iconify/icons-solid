import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwmwiq9vh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jwmwiq9vh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:water-softener"} {...others} />);
}

export default Component;
