import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/npx9-2bkr.css';
import '../../css/f/f38ujc19q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="npx9-2bkr"/><path class="f38ujc19q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:rectangle-flag-flat"} {...others} />);
}

export default Component;
