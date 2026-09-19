import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re34m18fj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="re34m18fj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:arrow-down-right"} {...others} />);
}

export default Component;
