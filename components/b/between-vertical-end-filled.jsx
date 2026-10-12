import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubfefht9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ubfefht9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:between-vertical-end-filled"} {...others} />);
}

export default Component;
