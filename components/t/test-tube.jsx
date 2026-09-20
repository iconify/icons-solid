import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/e/et22nn83t.css';
import '../../css/i/i2dvv9rdi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="et22nn83t"/><path class="i2dvv9rdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:test-tube"} {...others} />);
}

export default Component;
