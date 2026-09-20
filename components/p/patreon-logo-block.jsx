import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wi2dohgdy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wi2dohgdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:patreon-logo-block"} {...others} />);
}

export default Component;
