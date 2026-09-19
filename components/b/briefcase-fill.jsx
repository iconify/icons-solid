import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz0ue25cv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="zz0ue25cv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:briefcase-fill"} {...others} />);
}

export default Component;
