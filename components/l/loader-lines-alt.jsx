import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efi4ej_dk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="efi4ej_dk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:loader-lines-alt"} {...others} />);
}

export default Component;
