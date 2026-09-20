import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/w/whymwmp8p.css';
import '../../css/s/sdqr8yk5x.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="whymwmp8p"/><path class="sdqr8yk5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:bluetooth-disabled"} {...others} />);
}

export default Component;
