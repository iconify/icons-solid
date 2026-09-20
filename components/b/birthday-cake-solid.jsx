import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtoo5n7pl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gtoo5n7pl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:birthday-cake-solid"} {...others} />);
}

export default Component;
