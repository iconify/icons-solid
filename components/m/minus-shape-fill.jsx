import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/duvy2ibrs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="duvy2ibrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:minus-shape-fill"} {...others} />);
}

export default Component;
