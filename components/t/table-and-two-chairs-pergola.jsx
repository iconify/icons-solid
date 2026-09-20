import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9gm-41sf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k9gm-41sf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:table-and-two-chairs-pergola"} {...others} />);
}

export default Component;
