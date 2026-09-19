import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9ev8c_0g.css';
import '../../css/j/jfo5ug-pm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer u9ev8c_0g"/><path class="duoicon-primary-layer jfo5ug-pm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:folder-upload"} {...others} />);
}

export default Component;
