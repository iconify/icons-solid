import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8cqm23rx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p8cqm23rx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:calculator-outline"} {...others} />);
}

export default Component;
