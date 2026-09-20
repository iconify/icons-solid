import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if0m9_emw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="if0m9_emw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:ello-logo-solid"} {...others} />);
}

export default Component;
