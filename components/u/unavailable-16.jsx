import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_nqm2quh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="e_nqm2quh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:unavailable-16"} {...others} />);
}

export default Component;
