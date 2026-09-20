import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fklby8bzo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fklby8bzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-tilgjengelighet-snartutilgjengelig"} {...others} />);
}

export default Component;
