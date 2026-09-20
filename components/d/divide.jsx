import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z8g2jgblp.css';
import '../../css/a/ac2-8hbbw.css';
import '../../css/o/oa7jysr2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z8g2jgblp"/><circle class="ac2-8hbbw"/><circle class="oa7jysr2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:divide"} {...others} />);
}

export default Component;
