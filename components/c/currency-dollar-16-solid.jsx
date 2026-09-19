import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bocfkcb9c.css';
import '../../css/p/pi8mxsaiw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bocfkcb9c"/><path clip-rule="evenodd" class="pi8mxsaiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:currency-dollar-16-solid"} {...others} />);
}

export default Component;
