import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2exkg4dk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w2exkg4dk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:broadcom-logo-block"} {...others} />);
}

export default Component;
