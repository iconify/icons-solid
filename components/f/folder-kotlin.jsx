import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-ad0g2qb.css';
import '../../css/o/ogtj31bng.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l-ad0g2qb"/><path class="ogtj31bng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-kotlin"} {...others} />);
}

export default Component;
