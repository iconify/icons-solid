import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8wrg7o9z.css';
import '../../css/w/wgxunzb9r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="o8wrg7o9z"/><ellipse class="wgxunzb9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:mobile"} {...others} />);
}

export default Component;
