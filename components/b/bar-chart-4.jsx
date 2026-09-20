import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wav--fbep.css';
import '../../css/p/p1jwip47c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wav--fbep"/><path clip-rule="evenodd" class="p1jwip47c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bar-chart-4"} {...others} />);
}

export default Component;
