import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/w/w7jmnbb6l.css';
import '../../css/i/ir0hb5b-u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqjZUEW8V"><g class="wwvp95byt"><path class="w7jmnbb6l"/><path class="ir0hb5b-u"/></g></mask></defs><path mask="url(#SVGqjZUEW8V)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:airpods"} {...others} />);
}

export default Component;
