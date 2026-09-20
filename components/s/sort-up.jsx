import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpxw-t44r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rpxw-t44r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:sort-up"} {...others} />);
}

export default Component;
