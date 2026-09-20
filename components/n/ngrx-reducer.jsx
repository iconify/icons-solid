import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2e0vabgs.css';

const viewBox = {"width":300,"height":300};
const content = `<path class="q2e0vabgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:ngrx-reducer"} {...others} />);
}

export default Component;
