import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu9ugknqy.css';
import '../../css/b/b5v4ogcih.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wu9ugknqy"/><path class="b5v4ogcih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-test-open"} {...others} />);
}

export default Component;
