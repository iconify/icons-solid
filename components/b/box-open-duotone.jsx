import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukm9jj2re.css';
import '../../css/v/vmzzmbbei.css';
import '../../css/a/ak6i3yhou.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG6l7MOe2v"><g class="ukm9jj2re"><path class="vmzzmbbei"/><path class="ak6i3yhou"/></g></mask></defs><path mask="url(#SVG6l7MOe2v)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:box-open-duotone"} {...others} />);
}

export default Component;
