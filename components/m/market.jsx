import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvq1evy_s.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="jvq1evy_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:market"} {...others} />);
}

export default Component;
