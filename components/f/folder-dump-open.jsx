import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs929z2uj.css';
import '../../css/k/krr-sfb0q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bs929z2uj"/><path class="krr-sfb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-dump-open"} {...others} />);
}

export default Component;
