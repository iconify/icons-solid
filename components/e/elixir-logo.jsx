import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/idw7u8b_y.css';
import '../../css/q/qri7m8xsn.css';
import '../../css/e/e45ancb7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="idw7u8b_y"/><path class="qri7m8xsn"/><path class="e45ancb7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:elixir-logo"} {...others} />);
}

export default Component;
