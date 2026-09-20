import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6--_rptg.css';
import '../../css/a/a9ty3crzj.css';
import '../../css/w/w8gx8xbkp.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="g6--_rptg"/><path class="a9ty3crzj"/><path class="w8gx8xbkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-oncology"} {...others} />);
}

export default Component;
