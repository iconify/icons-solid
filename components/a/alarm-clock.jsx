import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fr6fopb3g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fr6fopb3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:alarm-clock"} {...others} />);
}

export default Component;
