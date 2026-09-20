import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpj-9pbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gpj-9pbfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:helly-hansen"} {...others} />);
}

export default Component;
