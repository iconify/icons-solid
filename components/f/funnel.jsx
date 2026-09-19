import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ou-9p9brw.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ou-9p9brw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:funnel"} {...others} />);
}

export default Component;
