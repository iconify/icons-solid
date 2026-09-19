import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuqbiy8fo.css';
import '../../css/z/z0k1ug9bx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zuqbiy8fo"/><path class="z0k1ug9bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:cabinet"} {...others} />);
}

export default Component;
