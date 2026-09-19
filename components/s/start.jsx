import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1c7tkr9j.css';
import '../../css/b/bqzzzebfr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x1c7tkr9j"/><path class="bqzzzebfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:start"} {...others} />);
}

export default Component;
