import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a91r15bjt.css';
import '../../css/u/u50_rvyrl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a91r15bjt"/><path class="u50_rvyrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:twine"} {...others} />);
}

export default Component;
