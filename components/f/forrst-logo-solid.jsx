import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdb9d7b0p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pdb9d7b0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:forrst-logo-solid"} {...others} />);
}

export default Component;
