import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od73i4b2g.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="od73i4b2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:list-timeline"} {...others} />);
}

export default Component;
