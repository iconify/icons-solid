import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez4hw9bdx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ez4hw9bdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:desk-lamp"} {...others} />);
}

export default Component;
