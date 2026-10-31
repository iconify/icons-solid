import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gktr6dbvg.css';
import '../../css/f/fr0bdx4ob.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="gktr6dbvg"/><path class="fr0bdx4ob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:north-macedonia"} {...others} />);
}

export default Component;
