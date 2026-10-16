import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb0k45bkf.css';
import '../../css/f/ftn7apb3z.css';
import '../../css/q/qtoznccub.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bb0k45bkf"/><path class="ftn7apb3z"/><path class="qtoznccub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:micro-hydro-48-bold"} {...others} />);
}

export default Component;
