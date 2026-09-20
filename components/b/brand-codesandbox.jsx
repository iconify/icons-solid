import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bwwelmb-a.css';
import '../../css/v/vy_pau6kb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bwwelmb-a"/><path class="vy_pau6kb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-codesandbox"} {...others} />);
}

export default Component;
