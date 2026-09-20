import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ovd4yacib.css';
import '../../css/x/xrbb7xb8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="ovd4yacib"/><path class="xrbb7xb8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:drupal-logo-2"} {...others} />);
}

export default Component;
