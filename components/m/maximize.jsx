import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp6ze3bac.css';
import '../../css/h/h-gnu7brs.css';
import '../../css/u/uh-othbsr.css';
import '../../css/u/uilal2b1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tp6ze3bac wm-k"/><path class="h-gnu7brs wm-a"/><path class="uh-othbsr wm-k"/><path class="uilal2b1e wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:maximize"} {...others} />);
}

export default Component;
