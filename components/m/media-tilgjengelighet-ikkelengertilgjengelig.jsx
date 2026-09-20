import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay2pkabdn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ay2pkabdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-tilgjengelighet-ikkelengertilgjengelig"} {...others} />);
}

export default Component;
