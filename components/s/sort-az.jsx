import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pn6k9gwzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pn6k9gwzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:sort-az"} {...others} />);
}

export default Component;
