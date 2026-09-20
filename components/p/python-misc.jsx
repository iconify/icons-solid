import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/me00cjb6q.css';
import '../../css/r/r4-esbb-w.css';
import '../../css/y/yq5xc3f-s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="me00cjb6q"/><path class="r4-esbb-w"/><path class="yq5xc3f-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:python-misc"} {...others} />);
}

export default Component;
