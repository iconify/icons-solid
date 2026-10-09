import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrc_6036o.css';
import '../../css/a/a99fs7b2u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hrc_6036o"/><path class="a99fs7b2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:highlighter-48-bold"} {...others} />);
}

export default Component;
