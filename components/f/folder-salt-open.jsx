import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da1i54d5m.css';
import '../../css/o/oensybc-j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="da1i54d5m"/><path class="oensybc-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-salt-open"} {...others} />);
}

export default Component;
