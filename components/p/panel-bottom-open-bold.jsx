import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl6wzybyg.css';
import '../../css/k/kvxqcabet.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nl6wzybyg"/><path class="kvxqcabet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-bottom-open-bold"} {...others} />);
}

export default Component;
