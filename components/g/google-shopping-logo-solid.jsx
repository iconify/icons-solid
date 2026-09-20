import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlcn8qbio.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hlcn8qbio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-shopping-logo-solid"} {...others} />);
}

export default Component;
