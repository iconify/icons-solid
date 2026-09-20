import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gkqy2ebkr.css';
import '../../css/b/bbj86qeqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gkqy2ebkr"/><circle class="bbj86qeqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rss"} {...others} />);
}

export default Component;
