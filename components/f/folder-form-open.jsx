import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix3d72cff.css';
import '../../css/y/ykiyg6-he.css';
import '../../css/q/qgl6-9-os.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ix3d72cff"/><path class="ykiyg6-he"/><path class="qgl6-9-os"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-form-open"} {...others} />);
}

export default Component;
