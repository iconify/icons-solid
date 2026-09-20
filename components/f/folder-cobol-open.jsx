import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9k8lxuwq.css';
import '../../css/j/j9ictigtg.css';
import '../../css/h/ht5m2bb5f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j9k8lxuwq"/><path class="j9ictigtg"/><path class="ht5m2bb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cobol-open"} {...others} />);
}

export default Component;
