import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb1dfb9ww.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tb1dfb9ww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:clothes-sweater"} {...others} />);
}

export default Component;
