import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbjam7ssf.css';
import '../../css/h/h-k00lbzy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gbjam7ssf"/><path class="h-k00lbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:copy-duotone"} {...others} />);
}

export default Component;
