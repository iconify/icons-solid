import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/haf1n5bdl.css';
import '../../css/q/q1b8t8b2v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="haf1n5bdl"/><path class="q1b8t8b2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-azure-pipelines-open"} {...others} />);
}

export default Component;
