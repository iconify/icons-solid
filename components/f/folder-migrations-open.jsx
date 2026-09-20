import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-4zo-uap.css';
import '../../css/g/gl-k21bjv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w-4zo-uap"/><path class="gl-k21bjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-migrations-open"} {...others} />);
}

export default Component;
