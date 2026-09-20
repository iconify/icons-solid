import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d55gj8bib.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d55gj8bib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cog-solid"} {...others} />);
}

export default Component;
