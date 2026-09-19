import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x384x5lmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x384x5lmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:grid-column-right"} {...others} />);
}

export default Component;
