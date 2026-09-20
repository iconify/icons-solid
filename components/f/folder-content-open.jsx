import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3gib6vnb.css';
import '../../css/j/jh04-5upe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v3gib6vnb"/><path class="jh04-5upe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-content-open"} {...others} />);
}

export default Component;
