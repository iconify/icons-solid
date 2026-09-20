import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/b/bvqtdmbte.css';
import '../../css/r/ru-bmss-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="bvqtdmbte"/><path class="ru-bmss-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:eyeem-logo"} {...others} />);
}

export default Component;
