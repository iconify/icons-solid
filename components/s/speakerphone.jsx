import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b040d2bca.css';
import '../../css/j/j18nsgblh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b040d2bca"/><path class="j18nsgblh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:speakerphone"} {...others} />);
}

export default Component;
