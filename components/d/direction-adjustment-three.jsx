import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjudv46oa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sjudv46oa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:direction-adjustment-three"} {...others} />);
}

export default Component;
