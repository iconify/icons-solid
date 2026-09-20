import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2bkmibuy.css';

const viewBox = {"width":300,"height":300};
const content = `<path class="m2bkmibuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:ngrx-effects"} {...others} />);
}

export default Component;
