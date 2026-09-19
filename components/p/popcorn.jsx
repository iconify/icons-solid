import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bqbi-tbcc.css';
import '../../css/i/icx7qgclj.css';
import '../../css/v/vyshbqbya.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeGfmIcYX"><g class="wwvp95byt"><path class="bqbi-tbcc"/><path class="icx7qgclj"/><path class="vyshbqbya"/></g></mask></defs><path mask="url(#SVGeGfmIcYX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:popcorn"} {...others} />);
}

export default Component;
