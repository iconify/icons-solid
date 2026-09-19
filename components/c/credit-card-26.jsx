import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd7n89blv.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="vd7n89blv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:credit-card-26"} {...others} />);
}

export default Component;
