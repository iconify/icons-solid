import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kgavekyxp.css';
import '../../css/b/bop73y1vi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kgavekyxp"/><path class="bop73y1vi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:pixel"} {...others} />);
}

export default Component;
