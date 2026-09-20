import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux02sgbdo.css';
import '../../css/a/aqhlej3kq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ux02sgbdo"/><path class="aqhlej3kq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-ambulance-call"} {...others} />);
}

export default Component;
