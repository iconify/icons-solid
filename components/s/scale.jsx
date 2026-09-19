import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im4sm4brc.css';
import '../../css/v/vyso5givu.css';
import '../../css/f/fb1jcdm6g.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="im4sm4brc"/><path class="vyso5givu"/><path class="fb1jcdm6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:scale"} {...others} />);
}

export default Component;
