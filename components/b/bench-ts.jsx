import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvrt6vnvm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nvrt6vnvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:bench-ts"} {...others} />);
}

export default Component;
