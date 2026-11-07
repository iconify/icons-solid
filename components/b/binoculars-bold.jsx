import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muwknjt7p.css';
import '../../css/b/b5jplqbkn.css';
import '../../css/b/bnrsc3bjp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="muwknjt7p"/><path class="b5jplqbkn"/><path clip-rule="evenodd" class="bnrsc3bjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:binoculars-bold"} {...others} />);
}

export default Component;
