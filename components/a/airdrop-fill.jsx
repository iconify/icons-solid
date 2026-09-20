import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0uhiy9nl.css';
import '../../css/f/fwin0va_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u0uhiy9nl"/><path class="fwin0va_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:airdrop-fill"} {...others} />);
}

export default Component;
