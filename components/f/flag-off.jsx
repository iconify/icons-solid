import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/go_1u3bfe.css';
import '../../css/d/dau88ab9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="go_1u3bfe"/><path class="dau88ab9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:flag-off"} {...others} />);
}

export default Component;
