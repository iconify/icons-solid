import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n14dm42yr.css';
import '../../css/m/m4ijjlwle.css';
import '../../css/l/l3k470bnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="n14dm42yr"/><path class="m4ijjlwle"/><path class="l3k470bnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:laravel-logo-1"} {...others} />);
}

export default Component;
