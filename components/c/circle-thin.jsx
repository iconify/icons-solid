import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coj1sq9ft.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="coj1sq9ft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:circle-thin"} {...others} />);
}

export default Component;
