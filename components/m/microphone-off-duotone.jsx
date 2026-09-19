import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/axs4e-b7g.css';
import '../../css/a/ae1d9obmw.css';
import '../../css/n/n35dlibfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="axs4e-b7g"/><path class="ae1d9obmw"/><path class="n35dlibfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:microphone-off-duotone"} {...others} />);
}

export default Component;
