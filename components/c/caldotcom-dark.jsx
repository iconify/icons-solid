import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg2xj8bky.css';

const viewBox = {"width":101,"height":22};
const content = `<path class="vg2xj8bky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:caldotcom-dark"} {...others} />);
}

export default Component;
