import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/ebd6yeibc.css';
import '../../css/y/yj6rd0m8s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGie0JFcFo"><g class="wwvp95byt"><path class="ebd6yeibc"/><path class="yj6rd0m8s"/></g></mask></defs><path mask="url(#SVGie0JFcFo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bill"} {...others} />);
}

export default Component;
