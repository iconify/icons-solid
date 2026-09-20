import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h87anf81m.css';
import '../../css/q/qj5o-8b_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h87anf81m"/><path class="qj5o-8b_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:instrument-tambourine-bold"} {...others} />);
}

export default Component;
