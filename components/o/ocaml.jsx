import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsfdawbzr.css';
import '../../css/s/sghc7ijwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dsfdawbzr"/><path class="sghc7ijwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:ocaml"} {...others} />);
}

export default Component;
