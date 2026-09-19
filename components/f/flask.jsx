import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge8uhqukk.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ge8uhqukk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:flask"} {...others} />);
}

export default Component;
