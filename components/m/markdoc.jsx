import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n27emnbuv.css';
import '../../css/x/x_3uzco3b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n27emnbuv"/><rect class="x_3uzco3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:markdoc"} {...others} />);
}

export default Component;
