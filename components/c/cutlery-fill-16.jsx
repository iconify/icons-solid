import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n358rvjyz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n358rvjyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:cutlery-fill-16"} {...others} />);
}

export default Component;
