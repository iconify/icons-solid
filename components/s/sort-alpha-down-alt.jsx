import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adw7mecqg.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="adw7mecqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:sort-alpha-down-alt"} {...others} />);
}

export default Component;
