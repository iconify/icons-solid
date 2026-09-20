import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oslj2ii4m.css';
import '../../css/a/a73d_ib1u.css';
import '../../css/e/eqjpfk44b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="oslj2ii4m"/><path class="a73d_ib1u"/><path class="eqjpfk44b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:mac-finder-logo"} {...others} />);
}

export default Component;
