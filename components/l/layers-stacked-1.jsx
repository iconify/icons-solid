import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvpd34b9j.css';
import '../../css/x/x32nieikw.css';
import '../../css/i/ij-62645t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xvpd34b9j"/><path class="x32nieikw"/><path class="ij-62645t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:layers-stacked-1"} {...others} />);
}

export default Component;
