import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fr5e5_blr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fr5e5_blr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:itunes-note"} {...others} />);
}

export default Component;
