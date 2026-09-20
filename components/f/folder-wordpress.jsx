import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcjmcxbsc.css';
import '../../css/i/ilpzg4xos.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hcjmcxbsc"/><path class="ilpzg4xos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-wordpress"} {...others} />);
}

export default Component;
