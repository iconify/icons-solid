import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enbnuf7yi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="enbnuf7yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:receipt-plus"} {...others} />);
}

export default Component;
