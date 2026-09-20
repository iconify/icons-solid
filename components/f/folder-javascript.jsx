import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljf7d2blh.css';
import '../../css/g/gurxminzy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ljf7d2blh"/><path class="gurxminzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-javascript"} {...others} />);
}

export default Component;
