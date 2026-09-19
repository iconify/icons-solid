import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3k5x5h4d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r3k5x5h4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:arrows-expand"} {...others} />);
}

export default Component;
