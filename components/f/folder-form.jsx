import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-ad0g2qb.css';
import '../../css/y/ykiyg6-he.css';
import '../../css/q/qgl6-9-os.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l-ad0g2qb"/><path class="ykiyg6-he"/><path class="qgl6-9-os"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-form"} {...others} />);
}

export default Component;
